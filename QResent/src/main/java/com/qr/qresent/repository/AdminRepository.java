package com.qr.qresent.repository;

import com.qr.qresent.dao.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
    List<Admin> findByEmail(String email);
}
