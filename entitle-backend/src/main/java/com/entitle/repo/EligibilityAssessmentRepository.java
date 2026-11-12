package com.entitle.repo;

import com.entitle.model.EligibilityAssessment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface EligibilityAssessmentRepository extends JpaRepository<EligibilityAssessment, Long> {
    List<EligibilityAssessment> findByUserId(String userId);

    Optional<EligibilityAssessment> findByUserIdAndSchemeId(String userId, String schemeId);

    void deleteByUserId(String userId);

    long countByAssessmentStatusNot(String status);

    @org.springframework.data.jpa.repository.Query("select count(distinct a.userId) from EligibilityAssessment a")
    long countDistinctUsers();
}
