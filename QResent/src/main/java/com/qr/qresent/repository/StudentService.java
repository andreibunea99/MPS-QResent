package com.qr.qresent.repository;

import com.qr.qresent.entities.StudentEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    public StudentEntity insert(StudentEntity studentEntity) {
        return studentRepository.save(studentEntity);
    }
}
