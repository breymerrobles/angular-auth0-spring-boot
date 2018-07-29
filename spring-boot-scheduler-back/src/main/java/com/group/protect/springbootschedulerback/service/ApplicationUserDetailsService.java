package com.group.protect.springbootschedulerback.service;

import java.util.Collections;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.group.protect.springbootschedulerback.entity.ApplicationUser;
import com.group.protect.springbootschedulerback.repository.ApplicationUserRepository;

@Service
public class ApplicationUserDetailsService implements UserDetailsService {
	private ApplicationUserRepository applicationUserRepository;

	public ApplicationUserDetailsService(ApplicationUserRepository applicationUserRepository) {
		this.applicationUserRepository = applicationUserRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		ApplicationUser applicationUser = applicationUserRepository.findByEmail(username);
		if (applicationUser == null) {
			throw new UsernameNotFoundException(username);
		}

		return new User(applicationUser.getEmail(), null,
				Collections.singletonList(new SimpleGrantedAuthority(applicationUser.getRole())));
	}

}
