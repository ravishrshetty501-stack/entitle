package com.entitle.repo;

import com.entitle.model.ChecklistProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface ChecklistProgressRepository extends JpaRepository<ChecklistProgress, Long> {
    List<ChecklistProgress> findByUserId(String userId);

    Optional<ChecklistProgress> findByUserIdAndSchemeId(String userId, String schemeId);

    void deleteByUserId(String userId);
}
