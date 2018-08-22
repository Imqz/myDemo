package com.qz.controller;

import com.qz.entity.User;
import com.qz.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("userController")
public class UserController {
   @Autowired
    private UserService userService;

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "allUser",method = RequestMethod.GET)
    public String  allUser(HttpServletRequest req){
        try {
             List<User> list=userService.getUser();
             List<String> userList=new ArrayList<String>();
            for (User user:list ) {
                String name=user.getName();
                userList.add(name);
            }
        }catch (Exception ex){
            System.out.println("错误信息："+ex);
        }
        return "index";
    }
    @RequestMapping(value = "login",method = RequestMethod.POST)
    public String login(User user, HttpServletResponse resp){
        try {
           User myuser= userService.login( user );
            if(null!=myuser){
                resp.getWriter().write("<script>alert('登陆成功')</script>");
                return  "hello";
            }
        }catch (Exception exc){
            System.out.println(exc);
        }

        return "index";
    }
}
;