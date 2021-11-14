/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qr.qresent.dao;

import com.qr.qresent.entities.StudentEntity;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author crist
 */

public class StudentDAOImpl implements StudentDAO {
    List<StudentEntity> students;

   public StudentDAOImpl(){
      students = new ArrayList<>();
   }

    @Override
    public void insertStudent(StudentEntity student) {
        students.add(new StudentEntity(student.getNume(), student.getPrenume(), student.getGrupa(), student.getID(), student.getRol(),
                student.getMaterie(), student.getIdCurs(), student.getData()));


    }

    @Override
    public void deleteStudent(StudentEntity student) {
        students.remove(student.getID());
        System.out.println("Student with ID: " + student.getID() + ", deleted from database");
    }

    @Override
    public List<StudentEntity> getAllStudents() {
        return students;
    }

    @Override
    public StudentEntity getStudent(int ID) {
        return students.get(ID);
    }

    @Override
    public void updateStudent(StudentEntity student) {
        students.get(student.getID()).setNumePrenume(student.getNume(), student.getPrenume());
        students.get(student.getID()).setGrupa(student.getGrupa());
        students.get(student.getID()).setRol(student.getRol());
        students.get(student.getID()).setMaterie(student.getMaterie());
        System.out.println("Student with ID " + student.getID() + ", updated in the database");
    }

    private StudentEntity StudentEntity(String nume, String prenume, String grupa, int id, String rol, String materie, int idCurs, String data) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
