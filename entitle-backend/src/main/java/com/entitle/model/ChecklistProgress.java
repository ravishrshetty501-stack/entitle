package com.entitle.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Data
@Entity
@Table(name = "checklist_progress", uniqueConstraints = @UniqueConstraint(columnNames = { "userId", "schemeId" }))
public class ChecklistProgress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 40)
    private String userId;
    @Column(nullable = false, length = 80)
    private String schemeId;
    @Column(columnDefinition = "TEXT")
    private String preparedJson;
    private Instant updatedAt;
}
