package com.example.miniprojectapi.service;

import com.example.miniprojectapi.dto.Result;
import com.example.miniprojectapi.entity.*;
import com.example.miniprojectapi.enums.AgeWarningsType;
import com.example.miniprojectapi.enums.CompatibilityType;
import com.example.miniprojectapi.enums.TotalType;
import com.example.miniprojectapi.repository.*;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class FoodService {
    private final UserInfoRepository userInfoRepository;
    private final IngredientsRepository ingredientsRepository;
    private final CompatibilityRepository compatibilityRepository;
    private final AgeWarningsRepository ageWarningsRepository;
    private final TotalResultRepository totalResultRepository;

    public void save(JsonNode jsonData, String name, String gender, Integer age, String issue, String object) {
        UserInfo userInfo = UserInfo.builder()
                .name(name)
                .gender(gender)
                .age(age)
                .issue(issue)
                .object(object)
                .build();

        userInfo = userInfoRepository.save(userInfo);

        List<Ingredients> ingredients = extractIngredients(jsonData, userInfo);
        ingredientsRepository.saveAll(ingredients);

        List<Compatibility> Compatibilities = extractHealthCompatibility(jsonData, userInfo);
        compatibilityRepository.saveAll(Compatibilities);

        List<AgeWarnings> ageWarnings = extractAgeWarnings(jsonData, userInfo);
        ageWarningsRepository.saveAll(ageWarnings);

        List<TotalResult> totalResults = extractTotalResult(jsonData, userInfo);
        totalResultRepository.saveAll(totalResults);
    }

    private List<Ingredients> extractIngredients(JsonNode jsonData, UserInfo userInfo) {
        List<Ingredients> ingredientsList = new ArrayList<>();
        JsonNode ingredientsNode = jsonData.path("ingredients");

        ingredientsNode.forEach(ingredientNode -> {
            Ingredients ingredients = new Ingredients();
            ingredients.setIngredientName(ingredientNode.path("ingredient_name").asText());
            ingredients.setDescription(ingredientNode.path("description").asText());
            ingredients.setSource(ingredientNode.path("source").asText());
            ingredients.setUser(userInfo);
            ingredientsList.add(ingredients);
        });

        return ingredientsList;
    }

    private List<Compatibility> extractHealthCompatibility(JsonNode jsonData, UserInfo userInfo) {
        List<Compatibility> healthCompatibilities = new ArrayList<>();
        JsonNode compatibilityNode = jsonData.path("compatibility");

        String[] compatibilityTypes = {"positive", "negative", "evaluation"};
        for (String type : compatibilityTypes) {
            JsonNode node = compatibilityNode.path(type);
            if (node.isTextual()) {
                Compatibility compatibility = createCompatibility(node.asText(), type, userInfo);
                healthCompatibilities.add(compatibility);
            }
        }

        return healthCompatibilities;
    }

    private List<AgeWarnings> extractAgeWarnings(JsonNode jsonData, UserInfo userInfo) {
        List<AgeWarnings> ageWarnings = new ArrayList<>();
        JsonNode ageWarningNode = jsonData.path("age_warning");

        JsonNode warningNode = ageWarningNode.path("age_warning");
        if (warningNode.isTextual()) {
            AgeWarnings warning = new AgeWarnings();
            warning.setDescription(warningNode.asText());
            warning.setType(AgeWarningsType.AGE_WARNING);
            warning.setUser(userInfo);
            ageWarnings.add(warning);
        }

        JsonNode adviceNode = ageWarningNode.path("advice");
        if (adviceNode.isTextual()) {
            AgeWarnings warning = new AgeWarnings();
            warning.setDescription(adviceNode.asText());
            warning.setType(AgeWarningsType.ADVICE);
            warning.setUser(userInfo);
            ageWarnings.add(warning);
        }

        return ageWarnings;
    }

    private List<TotalResult> extractTotalResult(JsonNode jsonData, UserInfo userInfo) {
        List<TotalResult> totalResults = new ArrayList<>();
        JsonNode totalResultNode = jsonData.path("total_result");

        JsonNode badNode = totalResultNode.path("bad_ingredient");
        if (badNode.isTextual()) {
            TotalResult result = new TotalResult();
            result.setDescription(badNode.asText());
            result.setType(TotalType.BAD);
            result.setUser(userInfo);
            totalResults.add(result);
        }

        JsonNode goodNode = totalResultNode.path("good_ingredient");
        if (goodNode.isTextual()) {
            TotalResult result = new TotalResult();
            result.setDescription(badNode.asText());
            result.setType(TotalType.GOOD);
            result.setUser(userInfo);
            totalResults.add(result);
        }

        JsonNode totalNode = totalResultNode.path("total_result");
        if (badNode.isTextual()) {
            TotalResult result = new TotalResult();
            result.setDescription(totalNode.asText());
            result.setType(TotalType.RESULT);
            result.setUser(userInfo);
            totalResults.add(result);
        }

        return totalResults;
    }

    private Compatibility createCompatibility(String description, String type, UserInfo userInfo) {
        Compatibility compatibility = new Compatibility();
        compatibility.setDescription(description);
        compatibility.setType(CompatibilityType.valueOf(type.toUpperCase()));
        compatibility.setUser(userInfo);
        return compatibility;
    }

    public Result result(String name) {
        UserInfo userInfo = userInfoRepository.findByName(name);
        if (userInfo == null) {
            throw new EntityNotFoundException("존재하지 않는 이름입니다.");
        }
        return buildResult(userInfo);
    }

    public List<Result> all() {
        List<UserInfo> userInfos = userInfoRepository.findAll();
        if (userInfos.isEmpty()) {
            throw new EntityNotFoundException("현재 분석된 정보가 없습니다.");
        }
        return userInfos.stream().map(this::buildResult).collect(Collectors.toList());
    }

    private Result buildResult(UserInfo userInfo) {
        return Result.builder()
                .name(userInfo.getName())
                .gender(userInfo.getGender())
                .age(userInfo.getAge())
                .issue(userInfo.getIssue())
                .object(userInfo.getObject())
                .ingredients(userInfo.getIngredients())
                .compatibilities(userInfo.getCompatibilities())
                .ageWarnings(userInfo.getAgeWarnings())
                .totalResults(userInfo.getTotalResults())
                .build();
    }
}
