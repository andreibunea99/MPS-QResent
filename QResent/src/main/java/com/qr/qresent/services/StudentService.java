package com.qr.qresent.services;

import com.google.gson.JsonElement;
import com.qr.qresent.dao.Student;
import com.qr.qresent.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

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

    public Boolean changeDetails(String ID, String group, String ldap) {
        Student student = getById(Integer.parseInt(ID));
        student.setGroup(group);
        student.setLdap(ldap);
        save(student);

        student = getById(Integer.parseInt(ID));

        if (Objects.equals(student.getGroup(), group) && Objects.equals(student.getLdap(), ldap)) {
            return Boolean.TRUE;
        }

        return Boolean.FALSE;
    }
}