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
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/auth/register", "/api/auth/login").permitAll()
                        .requestMatchers("/api/auth/**").authenticated()
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
