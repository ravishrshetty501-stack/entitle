package com.entitle.repo;

import com.entitle.model.SavedScheme;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface SavedSchemeRepository extends JpaRepository<SavedScheme, Long> {
    List<SavedScheme> findByUserIdOrderBySavedAtDesc(String userId);

    Optional<SavedScheme> findByUserIdAndSchemeId(String userId, String schemeId);

    void deleteByUserId(String userId);
}
