import {React, useState} from 'react';
import profile from '../media/profile.png';
import style from '../styling/teacher.module.scss';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link, useHistory } from "react-router-dom";
import SettingsIcon from '@mui/icons-material/Settings';import QRRepresent from "./qrcode";

import ImgMediaCard from './courseCard';

import Description from '../media/online-course.png';
import MinReq from '../media/min_req.png';
import Bonus from '../media/bonus.png';
import Time from '../media/time.png';
import Qr from '../media/qr.png';
import LoginIcon from '@mui/icons-material/Login';

import Stat from '../media/stat.png';
import CustomPopup from './customPopUp';

import {Button} from "@mui/material";
import axios from "axios";
import InsightsIcon from '@mui/icons-material/Insights';
import Statistics from './statistic';

const TeacherProfile = ({ token }) => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const popupCloseHandler2 = (e) => {
history.push('/');  };

    let data = localStorage.getItem("USER");
    const userT = JSON.parse(data);
    console.log("userT: " + userT.firstName);
    let user = null;
    if(userT.userType == "2") {
      console.log(1);
      let data2 = localStorage.getItem("TEACHER");
      user = JSON.parse(data2);
      console.log(user);
    } else {
      console.log(2);
      user = userT;
    }
    const course = user.courseInfo;
   
    const time = course.timetable;

    const history = useHistory();
    const t = {token};
    t.token = user.token;
    
    function qrSubmit(user) {
        axios
          .get("http://5090-89-136-175-3.ngrok.io/qrToken/" + user.ID + "/" + user.token)
          .then((response) => {
              console.log("sadasdsadsa");
            // const jsonData =JSON.stringify(response.data);
            // const qr = JSON.parse(jsonData);
            localStorage.setItem("QRToken", response.data);
            history.push({
                pathname: '/qrcode',
                search: '?token=' + response.data,
              })
        })
          .catch((error) => {
            alert(error);
          }); 
      };
      const courseName = user.courseName;
      function getStudentsList (user)  {
        axios
          .get("http://5090-89-136-175-3.ngrok.io/studentsList/" + user.courseName)
          .then((response) => {
            const jsonData =JSON.stringify(response.data);
            localStorage.setItem("STUDENTS_LIST", jsonData);
            history.push('/generateQRList');
        })
          .catch((error) => {
            alert(error);
          }); 
      };

      const getLastStat = (user) => {
        axios
            .get("http://5090-89-136-175-3.ngrok.io/statLastToken/" + user.ID)
            .then((response) => {
             const jsonData =JSON.stringify(response.data);
             console.log(jsonData);
             localStorage.setItem("LIST", jsonData);
        })
            .catch((error) => {
            alert(error);
            }); 
    };

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
        <LoginIcon style={{cursor:"pointer"}} onClick={() => popupCloseHandler2()}/>
        </div>
        <p >Email Address</p>
        <a>{user.email}</a>
        <p >An universitar</p>
        <a>2021</a>
        <p>Course</p>
        <a>{user.courseName}</a>
        {course.description == "NOT_SETUP" 
         && <a style={{fontSize: '12px', color: 'red'}}>     NOT CONFIGURED</a>}
        {course.description != "NOT_SETUP" && <ul> <img  style={{width:'20px'}} src={Description}/>{course.description}</ul>  }
        {course.minReqHomework != "NOT_SETUP" && <ul>   <img  style={{width:'20px'}} src={MinReq}/> Requirements<ul>{course.minReqHomework}</ul>
         <ul>{course.minReqProject}</ul>  
         <ul>{course.minReqExam}</ul></ul> }
        {course.bonus != "NOT_SETUP" && <ul> <img  style={{width:'20px'}} src={Bonus}/> {course.bonus}</ul> }
        {course.time != null && <ul> <img  style={{width:'20px'}} src={Time}/> Schedule  <ul>{time.map((t) => (
           <div> {t} </div> 
        ))} </ul> </ul> }  
         
         
          {userT.userType != "2" &&  
         <img  style={{width:'20px'}} src={Qr}/>  &&
         <p><button className={style.styleButton} style={{color:'black'}} onClick={() => { qrSubmit(user) }} >Generate QR</button></p> }
                   {userT.userType != "2" &&  
          <p><button className={style.styleButton}
            onClick={() => { getStudentsList(user) }} >Click hear to generate</button>  </p>}
         {/* </div></div> <img  style={{width:'20px'}} src={Stat} onClick={() => { getLastStat(user) }} /> */}
          <p><button className={style.styleButton} onClick={() => { getLastStat(user) }}>Collect statistics</button>
          
          <InsightsIcon onClick={(e) => setVisibility(!visibility)} src={Statistics} />
          <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Statistics"
      >
        <Statistics/>
      </CustomPopup>
          </p>
          
          
        </div>  
    </div>
    );
};

export default TeacherProfile;