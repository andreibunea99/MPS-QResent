package com.qr.qresent.repository;

import com.qr.qresent.dao.CourseInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseInfoRepository extends JpaRepository<CourseInfo, Integer> {
    List<CourseInfo> getByCourseName(String courseName);
}
