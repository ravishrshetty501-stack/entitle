package com.entitle.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Data
@Entity
@Table(name = "saved_schemes", uniqueConstraints = @UniqueConstraint(columnNames = { "userId", "schemeId" }))
public class SavedScheme {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 40)
    private String userId;
    @Column(nullable = false, length = 80)
    private String schemeId;
    private Instant savedAt;
}
