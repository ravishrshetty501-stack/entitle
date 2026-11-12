package com.entitle.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Data
@Entity
@Table(name = "notifications", uniqueConstraints = @UniqueConstraint(columnNames = { "userId", "dedupeKey" }))
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 40)
    private String userId;
    @Column(nullable = false, length = 500)
    private String message;
    @Column(length = 30)
    private String notificationType;
    @Column(length = 200)
    private String link;
    @Column(length = 160)
    private String dedupeKey;
    private boolean readStatus;
    private boolean dismissed;
    private Instant createdAt;
}
