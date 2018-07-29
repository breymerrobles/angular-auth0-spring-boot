package com.group.protect.springbootschedulerback.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group.protect.springbootschedulerback.entity.ApplicationUser;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {
    ApplicationUser findByEmail(String email);
}
