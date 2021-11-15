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
    private String course_name;
    @Column(name = "student_id")
    private Integer studentId;
    @Column(name = "teacher_id")
    private Integer teacher_id;
    @Column(name = "date")
    private String date;

    public Course(Integer ID, String course_name, Integer studentId, Integer teacher_id, String date) {
        this.ID = ID;
        this.course_name = course_name;
        this.studentId = studentId;
        this.teacher_id = teacher_id;
        this.date = date;
    }

    public Course() {

    }
}
