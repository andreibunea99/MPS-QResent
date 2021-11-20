package com.qr.qresent.dao;


import lombok.*;

import javax.persistence.*;

@Table(name = "CourseInfo")
@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CourseInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ID;
    @Column(name = "courseName")
    private String courseName;
    @Column(name = "description")
    private String description;
    @Column(name = "minReqHomework")
    private String minReqHomework;
    @Column(name = "minReqProject")
    private String minReqProject;
    @Column(name = "minReqExam")
    private String minReqExam;
    @Column(name = "bonus")
    private String bonus;
    @Column(name = "timetable")
    private String timetable;

    public CourseInfo(String courseName, String description, String minReqHomework, String minReqProject,
                      String minReqExam, String bonus, String timetable) {
        this.courseName = courseName;
        this.description = description;
        this.minReqHomework = minReqHomework;
        this.minReqProject = minReqProject;
        this.minReqExam = minReqExam;
        this.bonus = bonus;
        this.timetable = timetable;
    }
}
