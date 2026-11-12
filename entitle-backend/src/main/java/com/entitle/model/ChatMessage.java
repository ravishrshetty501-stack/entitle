package com.entitle.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Data
@Entity
@Table(name = "chat_messages", indexes = @Index(name = "idx_chat_user", columnList = "userId"))
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 40)
    private String userId;
    @Column(length = 12)
    private String role;
    @Column(columnDefinition = "TEXT")
    private String content;
    @Column(length = 80)
    private String schemeId;
    private String source;
    private Instant createdAt;
}
