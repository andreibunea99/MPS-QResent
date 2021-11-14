package com.qr.qresent.controllers;
import com.qr.qresent.dao.AdminDAO;
import com.qr.qresent.dao.AdminDAOImpl;
import com.qr.qresent.dao.StudentDAO;
import com.qr.qresent.dao.StudentDAOImpl;
import com.qr.qresent.entities.AdminEntity;
import com.qr.qresent.entities.StudentEntity;
import com.qr.qresent.repository.StudentRepository;
import com.qr.qresent.repository.StudentService;
import com.qr.qresent.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.POST;
@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class HomeController {

    @Autowired
    AuthenticationService authService;

    @Autowired
    StudentService studentService;

    @RequestMapping(value = "/test")
    @ResponseBody
    public String test () {
        StudentEntity admin = new StudentEntity("Sorescu", "Teodora", "314C2", 123, "0",
                "mate", 1, "12mai");
        studentService.insert(admin);
        return "test";
    }

    @RequestMapping(value = "/login", method = POST)
    @ResponseBody
//    public String login (@RequestParam(value = "email") String user, @RequestParam(value = "password") String passwd) {
//        return "Login with id=" + user + " and password=" + passwd;
//    }
    public String login (@RequestBody String user) {
        return user;
    }

    @RequestMapping(value = "/register", method = POST)
    @ResponseBody
    public String register (@RequestParam(value = "firstName") String firstName, @RequestParam(value = "lastName") String lastName,
                            @RequestParam(value = "email") String email, @RequestParam(value = "password") String passwd,
                            @RequestParam(value = "userType") String type) {
        return firstName + " " + lastName + " " + email + " " + passwd + " " + type;
    }

}