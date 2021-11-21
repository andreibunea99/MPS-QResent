package com.qr.qresent.dao;

import lombok.Data;

import javax.persistence.*;

@Table(name = "Course")
@Entity
@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID;
    @Column(name = "course_name")
    private String courseName;
    @Column(name = "student_id")
    private Integer studentId;
    @Column(name = "teacher_id")
    private Integer teacherId;
    @Column(name = "date")
    private String date;

    public Course(Integer ID, String courseName, Integer studentId, Integer teacherId, String date) {
        this.ID = ID;
        this.courseName = courseName;
        this.studentId = studentId;
        this.teacherId = teacherId;
        this.date = date;
    }

    public Course(String courseName, Integer studentId, Integer teacherId, String date) {
        this.ID = ID;
        this.courseName = courseName;
        this.studentId = studentId;
        this.teacherId = teacherId;
        this.date = date;
    }

    public Course() {

    }
}
