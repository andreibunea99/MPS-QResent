/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qr.qresent.dao;

import lombok.Data;

import javax.persistence.*;

@Table(name = "Admin")
@Entity
@Data
public class Admin  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID;
    @Column(name = "email")
    private String email;
    @Column(name = "admin_password")
    private String password;
    @Column(name = "UserType")
    private Integer userType;

    public Admin(Integer ID, String email, String password, Integer userType) {
        this.ID = ID;
        this.email = email;
        this.password = password;
        this.userType = userType;
    }

    public Admin() {

    }
}