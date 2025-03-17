package com.example.miniprojectapi.entity;

import com.example.miniprojectapi.enums.CompatibilityType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "compatibility", schema = "test")
public class Compatibility {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

//    @Lob
//    @Column(name = "evaluation", columnDefinition = "LONGTEXT")
//    private String evaluation;
//
//    @Lob
//    @Column(name = "negative")
//    private String negative;
//
//    @Lob
//    @Column(name = "positive")
//    private String positive;

    @Lob
    @Column(name = "description", columnDefinition = "LONGTEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    private CompatibilityType type;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo user;

}