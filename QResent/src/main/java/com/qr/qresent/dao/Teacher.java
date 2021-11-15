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
    private String last_name;
    @Column(name = "teacher_first_name")
    private String first_name;
    @Column(name = "email")
    private String email;
    @Column(name = "student_password")
    private String password;
    @Column(name = "UserType")
    private Integer userType;
    @Column(name = "LDAP")
    private String ldap;
    @Column(name = "course_name")
    private String course_name;


    public Teacher(Integer ID, String first_name, String last_name, String email, String password, Integer userType, String ldap, String course_name) {
        this.ID = ID;
        this.last_name = last_name;
        this.first_name = first_name;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.ldap = ldap;
        this.course_name = course_name;
    }

    public Teacher(String first_name, String last_name, String email, String password, Integer userType, String ldap, String course_name) {
        this.ID = ID;
        this.last_name = last_name;
        this.first_name = first_name;
        this.email = email;
        this.password = password;
        this.userType = userType;
        this.ldap = ldap;
        this.course_name = course_name;
    }

    public Teacher() {

    }
}