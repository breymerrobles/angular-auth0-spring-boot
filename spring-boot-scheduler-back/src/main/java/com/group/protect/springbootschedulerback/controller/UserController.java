package com.group.protect.springbootschedulerback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.group.protect.springbootschedulerback.entity.ApplicationUser;
import com.group.protect.springbootschedulerback.repository.ApplicationUserRepository;
import com.group.protect.springbootschedulerback.util.Role;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowedHeaders = { "Authorization", "x-auth-token",
		"x-requested-with", "x-xsrf-token" })
@RestController
@RequestMapping("/users")
@ComponentScan(basePackages = { "com.group.protect.springbootschedulerback" })
public class UserController {
	@Autowired
	private ApplicationUserRepository applicationUserRepository;
	@CrossOrigin(origins = "http://localhost:4200/home", maxAge = 3600, allowedHeaders = { "Authorization", "x-auth-token",
			"x-requested-with", "x-xsrf-token" })
	@RequestMapping(value = "/sign-up", method = RequestMethod.POST)
	public ResponseEntity<ApplicationUser> signUp(@RequestBody ApplicationUser user) {
		System.err.println("request rec:" + user);
		if (StringUtils.isEmpty(user.getRole())) {
			user.setRole(Role.PROFESIONAL.name());
		}
		applicationUserRepository.save(user);
		return new ResponseEntity<ApplicationUser>(user, HttpStatus.OK);
	}
}
