package com.qr.qresent.dao;

import  com.qr.qresent.entities.TeacherEntity;
import java.util.List;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

/**
 *
 * @author crist
 */

public interface TeacherDAO {
   
    public List<TeacherEntity> getAllTeachers();
    public void insertTeacher(TeacherEntity profesor); 
    public TeacherEntity getTeacher(int ID);
    public void updateTeacher(TeacherEntity profesor);
    public void deleteTeacher(TeacherEntity profesor);

}
