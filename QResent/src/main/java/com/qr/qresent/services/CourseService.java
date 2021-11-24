package com.qr.qresent.services;

import com.qr.qresent.dao.Course;
import com.qr.qresent.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    CourseRepository courseRepository;

    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    public Course save(Course course){
        return courseRepository.save(course);
    }

    public Course getById(Integer id) {
        return courseRepository.getById(id);
    }

    public List<Course> getByCourseName(String courseName) {
        return courseRepository.getByCourseName(courseName);
    }

    public List<Course> getByQrToken(String qrToken) {
        return courseRepository.getByQrToken(qrToken);
    }
}
