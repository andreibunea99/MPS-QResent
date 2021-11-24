
import React from 'react'
import style from '../styling/studentProfile.module.scss';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const TeachersList = () => {
    let data = localStorage.getItem("USER");
    //console.log(data.group)
    const user = JSON.parse(data);

    const data2 = localStorage.getItem("TEACHERS_LIST");
    const teachers = JSON.parse(data2);
    const history = useHistory();

    const getTeacher = (t) => {

        axios
            .get("http://e4c2-89-136-175-3.ngrok.io/listTeacher/" + t.id)
            .then((response) => {
            const jsonData =JSON.stringify(response.data);
            localStorage.setItem("TEACHER", jsonData);
            history.push('/teacher/profile');
        })
            .catch((error) => {
            alert(error);
            }); 
    };

    return (
        <div className={style.container}>
                <div className={style.card}>
                <div className={style.cardBody}>
                    <h className={style.cardTitle}>
                    Teachers List
                    </h>  
                </div >
                 <ul>{teachers.map((t) => (
                <div> 
                    
                    <button onClick={() => { getTeacher(t) }}>
                    {t.lastName} {t.firstName} </button></div>))} 
                </ul> 
            </div>               
        </div>
    );
}

 
export default TeachersList;