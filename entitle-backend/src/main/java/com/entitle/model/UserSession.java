package com.entitle.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Data
@Entity
@Table(name = "user_sessions", indexes = @Index(name = "idx_sessions_user", columnList = "userId"))
public class UserSession {
    @Id
    @Column(length = 200)
    private String token;
    @Column(nullable = false, length = 40)
    private String userId;
    private Instant expiresAt;
    private Instant createdAt;
}
