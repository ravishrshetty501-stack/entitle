package com.entitle.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.Instant;

@Data
@Entity
@Table(name = "eligibility_assessments", indexes = @Index(name = "idx_assess_user", columnList = "userId"))
public class EligibilityAssessment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 40)
    private String userId;
    @Column(nullable = false, length = 80)
    private String schemeId;
    @Column(length = 30)
    private String assessmentStatus;
    private Integer matchScore;
    @Column(columnDefinition = "TEXT")
    private String matchedCriteria;
    @Column(columnDefinition = "TEXT")
    private String missingCriteria;
    @Column(columnDefinition = "TEXT")
    private String resultJson;
    private Instant assessedAt;
}
