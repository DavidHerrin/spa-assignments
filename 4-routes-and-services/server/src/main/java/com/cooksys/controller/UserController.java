package com.cooksys.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.cooksys.dto.UserDto;
import com.cooksys.entity.UserEnt;
import com.cooksys.service.UserService;

@RestController
@RequestMapping("userents")
public class UserController {
	
	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}
		
	@GetMapping("@{username}")
	public UserDto getUser(@PathVariable String username) {
		return userService.getUser(username);
	}
	
	@GetMapping("validate/username/exists/@{username}")
	public Boolean getUserExists(@PathVariable String username) {
		return userService.getUserExists(username);
	}
	
	@GetMapping("validate/username/available/@{username}")
	public Boolean getUserAvail(@PathVariable String username) {
		return userService.getUserAvail(username);
	}
	
	@PostMapping("user")
    public UserEnt postUser(@RequestBody UserDto user) {
        return userService.postUser(user);
    }
	
	@DeleteMapping("@{username}")
	public void deleteUser(@PathVariable String username) {
		userService.deleteUser(username);
	}
	
	
 
}
