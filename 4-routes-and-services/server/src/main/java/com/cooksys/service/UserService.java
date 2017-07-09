package com.cooksys.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


import com.cooksys.repository.UserRepository;

import com.cooksys.dto.UserDto;

import com.cooksys.entity.UserEnt;

import com.cooksys.mapper.UserMapper;

@Service
public class UserService {
	
	Logger log = LoggerFactory.getLogger(UserService.class);
	private UserRepository uRepository;
	
	private UserMapper mapper;
	
	public UserService(UserRepository uRepository, UserMapper mapper) {
		this.uRepository = uRepository;
		this.mapper = mapper;
	}
		
	public UserEnt postUser(UserDto userDto) {
		return uRepository.save(mapper.toEntity(userDto));
					
	}
	
	public UserDto getUser(String username) {
		UserEnt user = uRepository.findByUsername(username);
		if (user == null) {
			log.info("User not found");
			return null;
		} else {
			return mapper.toDto(user);
		}
	}
	
	public Boolean getUserExists(String username) {
		UserEnt user = uRepository.findByUsername(username);
		if (user == null) {
			return false;
		} else {
			return true;
		}
	}
	
	public Boolean getUserAvail(String username) {
		UserEnt user = uRepository.findByUsername(username);
		if (user == null) {
			return true;
		} else {
			return false;
		}
	}
	
	public void deleteUser(String username) {
		UserEnt user = uRepository.findByUsername(username);
		if (user == null) {
			log.info("User not found");
			return;
		}
		uRepository.delete(user);
		
	}
	
	

}
