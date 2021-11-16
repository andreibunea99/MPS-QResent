/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qr.qresent.dao;


import lombok.Data;

import javax.persistence.*;

@Table(name = "Teacher")
@Entity
@Data
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID;
    @Column(name = "teacher_last_name")
    private String lastName;
    @Column(name = "teacher_first_name")
    private String firstName;
    @Column(name = "email")
    private String email;
    @Column(name = "student_password")
    private String password;
    @Column(name = "UserType")
    private Integer userType;
    @Column(name = "LDAP")
    private String ldap;
    @Column(name = "course_name")
    private String courseName;


    public Teacher(Integer ID, String firstName, String lastName, String email, String password, Integer userType, String ldap, String courseName) {
        this.ID = ID;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.ldap = ldap;
        this.courseName = courseName;
    }

    public Teacher(String firstName, String lastName, String email, String password, Integer userType, String ldap, String courseName) {
        this.ID = ID;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.ldap = ldap;
        this.courseName = courseName;
    }

    public Teacher() {

    }
}