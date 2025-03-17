package com.example.miniprojectapi.service;

import com.example.miniprojectapi.dto.Result;
import com.example.miniprojectapi.entity.AgeWarnings;
import com.example.miniprojectapi.entity.Compatibility;
import com.example.miniprojectapi.entity.Ingredients;
import com.example.miniprojectapi.entity.UserInfo;
import com.example.miniprojectapi.enums.AgeWarningsType;
import com.example.miniprojectapi.enums.CompatibilityType;
import com.example.miniprojectapi.repository.AgeWarningsRepository;
import com.example.miniprojectapi.repository.CompatibilityRepository;
import com.example.miniprojectapi.repository.IngredientsRepository;
import com.example.miniprojectapi.repository.UserInfoRepository;
import com.fasterxml.jackson.databind.JsonNode;
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

    public void save(JsonNode jsonData, String name, String gender, Integer age, String healthConditions, String goal) {
        UserInfo userInfo = UserInfo.builder()
                .name(name)
                .gender(gender)
                .age(age)
                .healthConditions(healthConditions)
                .goal(goal)
                .build();

        userInfo = userInfoRepository.save(userInfo);

        List<Ingredients> ingredients = extractIngredients(jsonData, userInfo);
        ingredientsRepository.saveAll(ingredients);

        List<Compatibility> Compatibilities = extractHealthCompatibility(jsonData, userInfo);
        compatibilityRepository.saveAll(Compatibilities);

        List<AgeWarnings> ageWarnings = extractAgeWarnings(jsonData, userInfo);
        ageWarningsRepository.saveAll(ageWarnings);
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

        JsonNode positiveNode = compatibilityNode.path("positive");
        positiveNode.fieldNames().forEachRemaining(fieldName -> {
            Compatibility compatibility = new Compatibility();
            compatibility.setDescription(positiveNode.path(fieldName).asText());
            compatibility.setType(CompatibilityType.POSITIVE);
            compatibility.setUser(userInfo);
            healthCompatibilities.add(compatibility);
        });

        JsonNode negativeNode = compatibilityNode.path("negative");
        negativeNode.fieldNames().forEachRemaining(fieldName -> {
            Compatibility compatibility = new Compatibility();
            compatibility.setDescription(negativeNode.path(fieldName).asText());
            compatibility.setType(CompatibilityType.NEGATIVE);
            compatibility.setUser(userInfo);
            healthCompatibilities.add(compatibility);
        });

        JsonNode evaluationNode = compatibilityNode.path("evaluation");
        if (evaluationNode.isTextual()) {
            Compatibility compatibility = new Compatibility();
            compatibility.setDescription(evaluationNode.asText());
            compatibility.setType(CompatibilityType.EVALUATION);
            compatibility.setUser(userInfo);
            healthCompatibilities.add(compatibility);
        }

        return healthCompatibilities;
    }

    private List<AgeWarnings> extractAgeWarnings(JsonNode jsonData, UserInfo userInfo) {
        List<AgeWarnings> ageWarnings = new ArrayList<>();
        JsonNode ageWarningNode = jsonData.path("age_warning");

        JsonNode warningNode = ageWarningNode.path("age_warning");
        warningNode.fieldNames().forEachRemaining(fieldName -> {
            AgeWarnings warning = new AgeWarnings();
            warning.setDescription(warningNode.path(fieldName).asText());
            warning.setType(AgeWarningsType.AGE_WARNING);
            warning.setUser(userInfo);
            ageWarnings.add(warning);
        });

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

    public Result result(String name) {
        UserInfo userInfo = userInfoRepository.findByName(name);
        return buildResult(userInfo);
    }

    public List<Result> all() {
        List<UserInfo> userInfos = userInfoRepository.findAll();
        return userInfos.stream().map(this::buildResult).collect(Collectors.toList());
    }

    private Result buildResult(UserInfo userInfo) {
        return Result.builder()
                .name(userInfo.getName())
                .gender(userInfo.getGender())
                .age(userInfo.getAge())
                .healthConditions(userInfo.getHealthConditions())
                .goal(userInfo.getGoal())
                .ingredients(userInfo.getIngredients())
                .compatibilities(userInfo.getCompatibilities())
                .ageWarnings(userInfo.getAgeWarnings())
                .build();
    }
}
