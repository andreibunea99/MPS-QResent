package com.qr.qresent.services;

import com.qr.qresent.dao.Course;
import com.qr.qresent.dao.CourseInfo;
import com.qr.qresent.repository.CourseInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CourseInfoService {
    @Autowired
    private CourseInfoRepository courseInfoRepository;
    public List<CourseInfo> findAll() {
        return courseInfoRepository.findAll();
    }

    public CourseInfo save(CourseInfo course){
        return courseInfoRepository.save(course);
    }

    public CourseInfo getById(Integer id) {
        return courseInfoRepository.getById(id);
    }

    public List<CourseInfo> getByCourseName(String courseName) {
        return courseInfoRepository.getByCourseName(courseName);
    }
}
