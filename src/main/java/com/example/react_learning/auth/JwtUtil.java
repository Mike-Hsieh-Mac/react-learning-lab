package com.example.react_learning.auth;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {
    // 正式環境要把這組金鑰放到環境變數，不能寫死在程式碼裡。
    private final SecretKey key = Keys.hmacShaKeyFor(
            "this-is-a-32-byte-long-secret-key-for-demo".getBytes());
    private final long expirationMillis = 1000 * 60 * 10; // 10 分鐘

    // 0.12.x 的 builder API：方法名不再有 set 前綴（subject 取代 setSubject）。
    public String generateToken(String username) {
        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expirationMillis))
                .signWith(key) // 0.12.x 一樣可以只丟 key，會依 key 型別自動挑演算法
                .compact();
    }

    // 解析成功代表：簽章正確（沒被竄改）且沒過期，回傳裡面存的 username。
    // 只要有一項不對，這裡就會直接丟例外，由 Filter 接住轉成 401。
    // 0.12.x 的解析 API：parser().verifyWith(key).build().parseSignedClaims(token)，
    // 拿到的是 Jws<Claims>，要透過 getPayload() 取出 Claims 再讀 getSubject()
    // （0.11.x 是 getBody()，這是兩版最容易搞混的差異之一）。
    public String extractUsername(String token) {
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }
}
