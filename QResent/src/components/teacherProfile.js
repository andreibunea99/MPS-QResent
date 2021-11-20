import React from 'react';
import profile from '../media/profile.png';
import style from '../styling/teacher.module.scss';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';import QRRepresent from "./qrcode";

import ImgMediaCard from './courseCard';

import Description from '../media/online-course.png';
import MinReq from '../media/min_req.png';
import Bonus from '../media/bonus.png';
import Time from '../media/time.png';
import Qr from '../media/qr.png';


import {Button} from "@mui/material";

class ProfessorProfile extends React.Component {
    render() { 
        let data = localStorage.getItem("USER");
        let data2 = localStorage.getItem("COURSE");
        const user = JSON.parse(data);
        const course = JSON.parse(data2);
        return (
            <div className={style.container}>
                    <div className={style.card}>
                    <div className={style.cardBody}>
                        <div className={style.avatar}>
                        <img
                            src={profile}
                            className="card-img-top"
                            alt=""
                        />
                        </div>
                        <h className={style.cardTitle}>
                        {user.firstName} {user.lastName}
                        </h>
                    </div>
                    <div className={style.icon}>
                    <Link to="/configcourse"><SettingsIcon style={{fill: "black"}}/></Link>
                    </div>
                    <p >Email Address</p>
                    <a>{user.email}</a>
                    <p >An universitar</p>
                    <a>2021</a>
                    <p>Course</p>
                    <a>{user.courseName}</a>
                    <a style={{fontSize: '12px', color: 'red'}}>     NOT CONFIGURED</a>
                    <ul> <img  style={{width:'20px'}} src={Description}/> Analiza si algebra</ul>
                     <ul>   <img  style={{width:'20px'}} src={MinReq}/> Requirements<ul>Tema - minim 50%</ul>
                     <ul>Proiect - minim 50%</ul>
                     <ul>Examen - minim 50%</ul></ul>
                     <ul> <img  style={{width:'20px'}} src={Bonus}/> Prezentarea unui articol stiintific</ul>
                     <ul>   <img  style={{width:'20px'}} src={Time}/> Schedule<ul>Monday - 12:00</ul>
                     <ul>Thursday: 14:00</ul></ul>
                    
              
                     <img  style={{width:'20px'}} src={Qr}/>
                     <Link style={{textDecoration:'none'}}to='/qrcode'><Button style={{color:'black'}} >Generate QR</Button></Link>
                  
                    </div>  
                </div>
               
        );
    }
}
 
export default ProfessorProfile;