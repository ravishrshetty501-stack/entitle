package com.entitle.repo;

import com.entitle.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface ApplicationRepository extends JpaRepository<Application, Long> {
    List<Application> findByUserIdOrderByUpdatedAtDesc(String userId);

    Optional<Application> findByIdAndUserId(Long id, String userId);

    Optional<Application> findByUserIdAndSchemeId(String userId, String schemeId);

    void deleteByUserId(String userId);
}
