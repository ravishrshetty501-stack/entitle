package com.entitle.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Data
@Entity
@Table(name = "users", indexes = @Index(name = "idx_users_email", columnList = "email", unique = true))
public class User {
    @Id
    @Column(length = 40)
    private String id;
    @Column(nullable = false, length = 190)
    private String email;
    private String name;
    @Column(length = 600)
    private String picture;
    private boolean demo;
    private String demoPersona;
    private Instant createdAt;
}
