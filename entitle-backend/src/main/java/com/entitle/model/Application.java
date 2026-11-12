package com.entitle.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "applications", uniqueConstraints = @UniqueConstraint(columnNames = { "userId", "schemeId" }))
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 40)
    private String userId;
    @Column(nullable = false, length = 80)
    private String schemeId;
    @Column(length = 30)
    private String status;
    private LocalDate applicationDate;
    private LocalDate deadline;
    @Column(length = 80)
    private String referenceNumber;
    @Column(length = 2000)
    private String notes;
    @Column(columnDefinition = "TEXT")
    private String historyJson;
    private Instant createdAt;
    private Instant updatedAt;
}
