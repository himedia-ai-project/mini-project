package com.example.miniprojectapi.repository;

import com.example.miniprojectapi.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
    @Query(value = "select u from UserInfo u where u.name=:name")
    UserInfo findByName(@Param("name") String name);
}
