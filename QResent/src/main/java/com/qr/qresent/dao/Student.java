/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qr.qresent.dao;

import lombok.Data;

import javax.persistence.*;


@Table(name = "Student")
@Entity
@Data
public class Student {
      @Column(name = "student_last_name")
      private String last_name;
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Integer ID;
      @Column(name = "student_first_name")
      private String first_name;
      @Column(name = "college_class")
      private String group;
      @Column(name = "UserType")
      private Integer userType;
      @Column(name = "email")
      private String email;
      @Column(name = "LDAP")
      private String ldap;
      @Column(name = "student_password")
      private String password;


      public Student(Integer ID, String first_name, String last_name, String group, String email, String password, Integer userType, String ldap) {
            this.last_name = last_name;
            this.ID = ID;
            this.first_name = first_name;
            this.group = group;
            this.userType = userType;
            this.email = email;
            this.ldap = ldap;
            this.password = password;
      }

      public Student(String first_name, String last_name, String group, String email, String password, Integer userType, String ldap) {
            this.last_name = last_name;
            this.first_name = first_name;
            this.group = group;
            this.userType = userType;
            this.email = email;
            this.ldap = ldap;
            this.password = password;
      }

      public Student() {

      }
}