package com.qz.serviceImp;

import com.qz.dao.mapper.UserMapper;
import com.qz.entity.User;
import com.qz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service("userService")
public class UserServiceImp implements UserService {
private UserMapper userMapper;
    @Override

    public List<User> getUser() throws Exception {
        List<User> list=userMapper.selectAllUser();
        return list;
    }
    @Override
    public User login(User user) throws Exception{
        User myuser=userMapper.userlogin(user);

           return  myuser;


    }
}
