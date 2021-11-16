package com.qr.qresent.controllers;
import com.qr.qresent.dao.Admin;
import com.qr.qresent.dao.Course;
import com.qr.qresent.dao.Student;
import com.qr.qresent.dao.Teacher;
import com.qr.qresent.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.util.List;

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
        Student student = new Student(1, "Teodorax", "Teodora", "321", "mail@mail", "pass", 2, "ldap.ldap");
        studentService.save(student);

        Admin admin = new Admin(1, "da", "da", 0);
        adminService.save(admin);

        Teacher teacher = new Teacher(1, "str", "str", "str", "str", 1, "str", "str");
        teacherService.save(teacher);

        Course course = new Course(1, "name", 1,2, "da");
        courseService.save(course);



        return "test";
    }


    @RequestMapping(value = "/listStud", method = GET)
    @ResponseBody
    public ResponseEntity<List<Student>> listStud () {

        return new ResponseEntity<List<Student>>(studentService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/listTeacher", method = GET)
    @ResponseBody
    public ResponseEntity<List<Teacher>> listTeacher () {

        return new ResponseEntity<List<Teacher>>(teacherService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/listAdmin", method = GET)
    @ResponseBody
    public ResponseEntity<List<Admin>> listAdmin () {

        return new ResponseEntity<List<Admin>>(adminService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/login", method = POST)
    @ResponseBody
    public ResponseEntity<String> login (@RequestBody String user) {
        JsonObject jsonObject = JsonParser.parseString(user).getAsJsonObject();

        String email = jsonObject.get("email").getAsString();
        String password = jsonObject.get("password").getAsString();

        if (studentService.getByEmail(email).size() != 0) {
            Student student = studentService.getByEmail(email).get(0);
            if (student.getPassword().equals(password)) {
                jsonObject.addProperty("ID", student.getID());
                jsonObject.addProperty("firstName", student.getFirstName());
                jsonObject.addProperty("lastName", student.getLastName());
                jsonObject.addProperty("ldap", student.getLdap());
                jsonObject.addProperty("group", student.getGroup());
                jsonObject.addProperty("courseName", "");
                jsonObject.addProperty("userType", student.getUserType());
                return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
            }
        }

        if (teacherService.getByEmail(email).size() != 0) {
            Teacher teacher = teacherService.getByEmail(email).get(0);
            if (teacher.getPassword().equals(password)) {
                jsonObject.addProperty("ID", teacher.getID());
                jsonObject.addProperty("firstName", teacher.getFirstName());
                jsonObject.addProperty("lastName", teacher.getLastName());
                jsonObject.addProperty("ldap", teacher.getLdap());
                jsonObject.addProperty("group", "");
                jsonObject.addProperty("courseName", teacher.getCourseName());
                jsonObject.addProperty("userType", teacher.getUserType());
                return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
            }
        }

        if (adminService.getByEmail(email).size() != 0) {
            Admin admin = adminService.getByEmail(email).get(0);
            if (admin.getPassword().equals(password)) {
                jsonObject.addProperty("ID", admin.getID());
                jsonObject.addProperty("firstName", "");
                jsonObject.addProperty("lastName", "");
                jsonObject.addProperty("ldap", "");
                jsonObject.addProperty("group", "");
                jsonObject.addProperty("courseName", "");
                jsonObject.addProperty("userType", admin.getUserType());
                return new ResponseEntity<String>(jsonObject.toString(), HttpStatus.OK);
            }
        }

        return new ResponseEntity<String>("", HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/register", method = POST)
    @ResponseBody
    public ResponseEntity<String> register(@RequestBody String user) {
        JsonObject jsonObject = JsonParser.parseString(user).getAsJsonObject();

        String firstName = jsonObject.get("firstName").getAsString();
        String lastName = jsonObject.get("lastName").getAsString();
        String email = jsonObject.get("email").getAsString();
//        String group = jsonObject.get("group").getAsString();
        String password = jsonObject.get("password").getAsString();
        int userType = jsonObject.get("userType").getAsInt();
//        String ldap = jsonObject.get("ldap").getAsString();
        String course = jsonObject.get("course").getAsString();

        if (userType == 0) {
            adminService.save(new Admin(email, password, userType));
            return new ResponseEntity<String>("", HttpStatus.OK);
        }

        if (userType == 1) {
            teacherService.save(new Teacher(firstName, lastName, email, password, userType, "NOT_SETUP", course));
            return new ResponseEntity<String>("", HttpStatus.OK);
        }

        if (userType == 2) {
            studentService.save(new Student(firstName, lastName, "NOT_SETUP", email, password, userType, "NOT_SETUP"));
            return new ResponseEntity<String>("", HttpStatus.OK);
        }

        return new ResponseEntity<String>("", HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/manageAccount/{id}", method = POST)
    @ResponseBody
    public ResponseEntity<String> manageAccount(@PathVariable String id, @RequestBody String user) {
        JsonObject jsonObject = JsonParser.parseString(user).getAsJsonObject();

        Boolean r = studentService.changeDetails(id, jsonObject.get("group").getAsString(),
                jsonObject.get("ldap").getAsString());

        if (r) {
            return new ResponseEntity<String>("", HttpStatus.OK);
        }

        return new ResponseEntity<String>("", HttpStatus.BAD_REQUEST);
    }

}