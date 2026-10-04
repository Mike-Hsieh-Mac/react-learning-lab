package com.example.react_learning.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, JwtAuthFilter jwtAuthFilter) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // 無狀態 API 不靠 cookie，不需要 CSRF 保護
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // 不建立 HttpSession
                // 關鍵：沒有這段，Spring Security 在「沒登入」時預設會回 403（Http403ForbiddenEntryPoint），
                // 因為我們沒有用 httpBasic()/formLogin()，Spring 找不到「該怎麼引導使用者登入」，
                // 索性就用 403 打發。但我們的 API 規格是「沒帶 token 或 token 無效 -> 401」，
                // 所以要自己指定一個 AuthenticationEntryPoint，攔截「未認證」的例外並回 401。
                .exceptionHandling(ex -> ex.authenticationEntryPoint(unauthorizedEntryPoint()))
                // H2 console 的畫面是用 <frame> 組出來的，Spring Security 預設會送出
                // X-Frame-Options: DENY（防止 clickjacking），這會讓瀏覽器直接擋掉 H2 console
                // 的內容，看起來就像「登入進不去 / 頁面空白」。這裡只放寬成 sameOrigin（只允許
                // 同一個來源把自己嵌進 frame），不是整個關掉，安全性影響很小。
                .headers(headers -> headers.frameOptions(frame -> frame.sameOrigin()))
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/register", "/api/auth/login").permitAll()
                        .requestMatchers("/api/auth/**").authenticated()
                        .requestMatchers("/h2-console/**").permitAll()
                        .anyRequest().permitAll() // 其他既有的 /api/** 維持不受影響
                )
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    // 401 (Unauthorized) = 「你根本沒登入 / token 無效」；
    // 403 (Forbidden)    = 「你登入了，但沒有權限」。
    // 這裡的情境屬於前者，所以自訂 entry point，直接回 401，不帶任何頁面或內容。
    @Bean
    public AuthenticationEntryPoint unauthorizedEntryPoint() {
        return (request, response, authException) ->
                response.sendError(jakarta.servlet.http.HttpServletResponse.SC_UNAUTHORIZED);
    }
}
