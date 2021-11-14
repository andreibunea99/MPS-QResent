package com.qr.qresent.repository;

import com.qr.qresent.entities.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentEntity, Integer>{

}
