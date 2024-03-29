import {React, useState} from 'react';
import profile from '../media/student.png';
import style from '../styling/studentProfile.module.scss';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link, useHistory } from "react-router-dom"
import UserDetails from './userDetails';
import Box from '@mui/material/CardActions';
import Token from '../media/token.png';
import axios from "axios";
import LoginIcon from '@mui/icons-material/Login';



const StudentProfile  = () => {
    let data = localStorage.getItem("USER");
    //console.log(data.group)
    const user = JSON.parse(data);
    console.log(user);
    const history = useHistory();

    const [visibility, setVisibility] = useState(false);


    const popupCloseHandler = (e) => {
        history.push('/');
    };
    

    function getTeachersList ()  {
        axios
            .get("http://5090-89-136-175-3.ngrok.io/listTeacher")
            .then((response) => {
            const jsonData =JSON.stringify(response.data);
            localStorage.setItem("TEACHERS_LIST", jsonData);
            history.push('/teachersList');
        })
            .catch((error) => {
            alert(error);
            }); 
    };

    return (
        <div className={style.container}>
            {/* <div> // "col-md-4 animated fadeIn"> */}
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
                    
                </div >
                <div className={style.icon}>
                <Link to="/manageAccount"><ManageAccountsIcon style={{fill: "black"}}/></Link>
                <LoginIcon style={{cursor:"pointer"}} onClick={() => popupCloseHandler()}/>
                </div>
                {/* <div className={style.userDetails}>  <UserDetails/></div> */}
                <p >Email Address</p>
                <a>{user.email}</a>
                <p >Facultatea</p>
                <a>Automatica si Calculatoare</a>
                <p >An universitar</p>
                <a>2021</a>
                <p>Grupa</p>
                {user.group == "NOT_SETUP" && <a style={{fontSize: '12px', color: 'red'}}>     NOT CONFIGURED</a>}
                {user.group != "NOT_SETUP" && <a>{user.group}</a>}
                <p>Ldap</p>
                {user.ldap == "NOT_SETUP" && <a style={{fontSize: '12px', color: 'red'}}>     NOT CONFIGURED</a>}
                {user.ldap != "NOT_SETUP" &&<a>{user.ldap}</a>}
                <p>Personal access token</p>
                <a> <img style={{width:'20px'}} src={Token}/> {user.token} </a>
                <br/>
                <a style={{fontSize: '13px', color: 'black'}}>Personal access tokens function like ordinary OAuth access tokens. They can be used instead of a password after scaning the QR code</a>
                {/* <p style={{fontSize: '13px', color: 'black'}}><Link to="/teachersList">View the list of teachers</Link></p> */}
                <p><button className={style.styleButton} style={{color:'black'}} onClick={() => { getTeachersList() }} >Click hear to see teachers list</button></p>      
            </div>               
        </div>
    );
}



export default StudentProfile;