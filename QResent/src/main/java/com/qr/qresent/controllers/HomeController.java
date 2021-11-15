package com.qr.qresent.controllers;
import com.qr.qresent.dao.Admin;
import com.qr.qresent.dao.Course;
import com.qr.qresent.dao.Student;
import com.qr.qresent.dao.Teacher;
import com.qr.qresent.services.*;
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

    @Autowired
    AdminService adminService;

    @Autowired
    TeacherService teacherService;

    @Autowired
    CourseService courseService;

    @RequestMapping(value = "/test")
    @ResponseBody
    public String test () {
        Student student = new Student("Sroescu", 1, "Teodora", "321", 2, "email", "ldap", "pass");
        studentService.save(student);

        Admin admin = new Admin(1, "da", "da", 0);
        adminService.save(admin);

        Teacher teacher = new Teacher(1, "str", "str", "str", "str", 1, "str", "str");
        teacherService.save(teacher);

        Course course = new Course(1, "name", 1,2, "da");
        courseService.save(course);



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