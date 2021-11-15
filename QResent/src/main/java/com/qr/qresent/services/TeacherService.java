package com.qr.qresent.services;

import com.qr.qresent.dao.Teacher;
import com.qr.qresent.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {

    @Autowired
    TeacherRepository teacherRepository;

    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    public Teacher save(Teacher teacher){
        return teacherRepository.save(teacher);
    }

    public Teacher getById(Integer id) {
        return teacherRepository.getById(id);
    }

    public List<Teacher> getByEmail(String email) {
        return teacherRepository.findByEmail(email);
    }
}
