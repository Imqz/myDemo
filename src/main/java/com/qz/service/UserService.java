package com.qz.service;

import com.qz.entity.User;

import java.util.List;

public interface UserService {

    List<User> getUser() throws Exception;
    User login(User user) throws Exception;

}
