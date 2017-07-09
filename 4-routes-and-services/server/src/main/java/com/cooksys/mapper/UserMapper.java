package com.cooksys.mapper;

import org.mapstruct.Mapper;


import com.cooksys.dto.UserDto;

import com.cooksys.entity.UserEnt;

@Mapper(componentModel = "spring", uses = { ReferenceMapper.class })
public interface UserMapper {
	
	UserDto toDto(UserEnt entity);

	UserEnt toEntity(UserDto dto);
	
	
}