package com.qr.qresent.services;

import com.qr.qresent.dao.Student;
import com.qr.qresent.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepository studentRepository;

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Student save(Student student){
        return studentRepository.save(student);
    }

    public Student getById(Integer id) {
        return studentRepository.getById(id);
    }

    public List<Student> getByEmail(String email) {
        return studentRepository.findByEmail(email);
    }

}