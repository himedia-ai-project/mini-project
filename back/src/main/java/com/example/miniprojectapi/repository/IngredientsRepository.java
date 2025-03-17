package com.example.miniprojectapi.repository;

import com.example.miniprojectapi.entity.Ingredients;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientsRepository extends JpaRepository<Ingredients, Integer> {
}
