package com.qr.qresent.controllers;

import com.qr.qresent.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@Controller
public class HomeController {

    @Autowired
    AuthenticationService authService;

    @RequestMapping(value = "/login", method = POST)
    @ResponseBody
    public String login (@RequestParam(value = "user") String user, @RequestParam(value = "password") String passwd) {
        return "Login with id=" + user + " and password=" + passwd;
    }

    @RequestMapping(value = "/register", method = POST)
    @ResponseBody
    public String register (@RequestParam(value = "firstName") String firstName, @RequestParam(value = "lastName") String lastName,
                          @RequestParam(value = "email") String email, @RequestParam(value = "password") String passwd,
                          @RequestParam(value = "userType") String type) {
        return firstName + " " + lastName + " " + email + " " + passwd + " " + type;
    }

}
