package com.qr.qresent.controllers;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
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

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@CrossOrigin("*")
@Controller
public class QRController {

    @Autowired
    AuthenticationService authService;

    @Autowired
    TokenService tokenService;

    @Autowired
    TeacherService teacherService;

    @Autowired
    CourseService courseService;

    @Autowired
    StudentService studentService;

    @RequestMapping(value = "/qrSubmit/{qrToken}", method = POST)
    @ResponseBody
    public ResponseEntity<String> qrSubmit(@PathVariable String qrToken, @RequestBody String user) {
        JsonObject jsonObject = JsonParser.parseString(user).getAsJsonObject();

        String email = jsonObject.get("email").getAsString();
        String token = jsonObject.get("token").getAsString();

        if (studentService.getByEmail(email).get(0).getUserType() != 2) {
            System.out.println(studentService.getByEmail(email).get(0).getID());
            System.out.println(token);
            return new ResponseEntity<String>("", HttpStatus.BAD_REQUEST);
        }

        Teacher teacher = teacherService.getById(tokenService.getIdFromToken(qrToken));

        Course course = new Course(teacher.getCourseName(), studentService.getByEmail(email).get(0).getID(), teacher.getID(),
                LocalDateTime.now().toString(), qrToken);

        courseService.save(course);

        return new ResponseEntity<String>("", HttpStatus.OK);
    }

    @RequestMapping(value = "/qrToken/{id}/{tokenUser}", method = GET)
    @ResponseBody
    public ResponseEntity<String> qrToken(@PathVariable String id, @PathVariable String tokenUser) {

        if (authService.isProfessor(Integer.valueOf(id), tokenUser)) {
            String token = tokenService.getTokenTeacher(Integer.valueOf(id), tokenUser);
            return new ResponseEntity<String>(token, HttpStatus.OK);
        }

        return new ResponseEntity<String>("", HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(value = "/statLastToken/{id}", method = GET)
    @ResponseBody
    public ResponseEntity<List<String>> getStatLastToken (@PathVariable String id) {

        String token = tokenService.getTokenFromTeacher(Integer.valueOf(id));

        List<Course> list = courseService.getByCourseName(teacherService.getById(Integer.valueOf(id)).getCourseName());
        Collections.reverse(list);
        int counter = 0;
        String lastT = "";
        List<String> returnList = new ArrayList<>();
        List<String> tokens = new ArrayList<>();

        for (Course c : list) {
            if (!Objects.equals(c.getQrToken(), lastT)) {
                returnList.add(String.valueOf(courseService.getByQrToken(c.getQrToken()).size()));
                tokens.add(c.getQrToken());
                counter++;
                if (counter == 3) {
                    break;
                }
            }
            lastT = c.getQrToken();
        }

        return new ResponseEntity<List<String>>(returnList, HttpStatus.OK);
    }
}
