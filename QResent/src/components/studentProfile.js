import React from 'react';
import profile from '../media/profile.png';
import style from '../styling/studentProfile.module.scss';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from "react-router-dom";


class StudentProfile extends React.Component {
      render() {
        let data = localStorage.getItem("USER");
        console.log(data.group)
        const user = JSON.parse(data);
        return (
            <div className={style.container}>
                <div>
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
                        <p className={style.cardText}>
                        {user.group}
                        </p>
                        <p className={style.cardText}>
                        {user.ldap}
                        </p>
                    </div>
                    <Link to="/manageAccount"><ManageAccountsIcon/></Link>
                    </div>
                </div>
               
            </div>
        );
    }
}


export default StudentProfile;