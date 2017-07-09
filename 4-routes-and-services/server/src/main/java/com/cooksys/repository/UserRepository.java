package com.cooksys.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cooksys.entity.UserEnt;

public interface UserRepository extends JpaRepository<UserEnt, Long>{

	UserEnt findByUsername(String username);
	
		
	
	
}
