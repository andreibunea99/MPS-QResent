package com.qr.qresent.repository;

import com.qr.qresent.dao.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {
}
