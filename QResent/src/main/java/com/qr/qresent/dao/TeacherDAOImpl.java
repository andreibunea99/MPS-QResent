/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qr.qresent.dao;
import  com.qr.qresent.entities.TeacherEntity;

import java.util.List;
import java.util.ArrayList;

/**
 *
 * @author crist
 */

public class TeacherDAOImpl implements TeacherDAO {
    List<TeacherEntity> teachers;

   public TeacherDAOImpl(){
        teachers = new ArrayList<>();
   }

   @Override
   public void insertTeacher(TeacherEntity teacher) {
       teachers.add(new TeacherEntity(teacher.getNume(), teacher.getPrenume(), teacher.getID(), teacher.getRol(),
             teacher.getMaterie(), teacher.getIdCurs()));
   }

    @Override
    public void deleteTeacher(TeacherEntity teacher) {
        teachers.remove(teacher.getID());
        System.out.println("Teacher with ID: " + teacher.getID() + ", deleted from database");
    }

    @Override
    public List <TeacherEntity> getAllTeachers() {
        return teachers;
    }

    @Override
    public TeacherEntity getTeacher(int ID) {
        return teachers.get(ID);
    }

    @Override
    public void updateTeacher(TeacherEntity teacher) {
        teachers.get(teacher.getID()).setNumePrenume(teacher.getNume(), teacher.getPrenume());
        teachers.get(teacher.getID()).setRol(teacher.getRol());
        teachers.get(teacher.getID()).setMaterie(teacher.getMaterie());
        teachers.get(teacher.getID()).setIdCurs(teacher.getIdCurs());

        System.out.println("Teacher with ID " + teacher.getID() + ", updated in the database");
    }
}