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
      private String lastName;
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Integer ID;
      @Column(name = "student_first_name")
      private String firstName;
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


      public Student(Integer ID, String firstName, String lastName, String group, String email, String password, Integer userType, String ldap) {
            this.lastName = lastName;
            this.ID = ID;
            this.firstName = firstName;
            this.group = group;
            this.userType = userType;
            this.email = email;
            this.ldap = ldap;
            this.password = password;
      }

      public Student(String firstName, String lastName, String group, String email, String password, Integer userType, String ldap) {
            this.lastName = lastName;
            this.firstName = firstName;
            this.group = group;
            this.userType = userType;
            this.email = email;
            this.ldap = ldap;
            this.password = password;
      }

      public Student() {

      }
}