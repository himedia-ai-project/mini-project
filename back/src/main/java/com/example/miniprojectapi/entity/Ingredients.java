package com.example.miniprojectapi.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ingredients", schema = "test")
public class Ingredients {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "ingredient_name", nullable = false)
    private String ingredientName;

    @Lob
    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "source", nullable = false)
    private String source;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private UserInfo user;

}