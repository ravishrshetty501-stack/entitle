package com.entitle.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "schemes", indexes = {
        @Index(name = "idx_schemes_category", columnList = "category"),
        @Index(name = "idx_schemes_state", columnList = "state") })
public class Scheme {
    @Id
    @Column(length = 80)
    private String id;
    @Column(nullable = false)
    private String name;
    @Column(length = 60)
    private String category;
    private String department;
    @Column(length = 20)
    private String level;
    @Column(length = 60)
    private String state;
    private Integer minAge;
    private Integer maxAge;
    private Long incomeMax;
    @Column(length = 20)
    private String status;
    @Column(length = 600)
    private String officialUrl;
    @Column(length = 600)
    private String sourceUrl;
    @Column(length = 20)
    private String lastVerified;
    @Column(columnDefinition = "TEXT")
    private String data;
}
