package com.qr.qresent.repository;

import com.qr.qresent.dao.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
    List<Course> getByCourseName(String courseName);
    List<Course> getByQrToken(String qrToken);
}
