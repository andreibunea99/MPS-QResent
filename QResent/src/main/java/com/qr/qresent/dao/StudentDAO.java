/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.qr.qresent.dao;

import com.qr.qresent.entities.StudentEntity;

import java.util.List;

/**
 *
 * @author crist
 */

public interface StudentDAO {
   public List<StudentEntity> getAllStudents();
   public void insertStudent(StudentEntity student);
   public StudentEntity getStudent(int ID);
   public void updateStudent(StudentEntity student);
   public void deleteStudent(StudentEntity student);
}