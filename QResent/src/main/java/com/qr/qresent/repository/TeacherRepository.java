package com.qr.qresent.repository;

import com.qr.qresent.dao.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
    List<Teacher> findByEmail(String email);
}
