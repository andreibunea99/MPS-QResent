/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.qr.qresent.dao;
import com.qr.qresent.entities.AdminEntity;

/**
 *
 * @author crist
 */
public interface AdminDAO {
   public void insertAdmin(AdminEntity admin);
   public AdminEntity getAdmin(int ID);
   public void updateAdmin(AdminEntity admin);
   public void deleteAdmin(AdminEntity admin);
}
