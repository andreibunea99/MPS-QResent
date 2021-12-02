import React from 'react';
import { Link , useHistory} from 'react-router-dom';
import style from '../styling/header.module.scss';
import logo from '../media/school-icon.png';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Logout from './logout';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
const Header = () => { 
    let data = localStorage.getItem("USER");
    const user = JSON.parse(data);
    const history = useHistory();
    console.log("userHeader ", user);
    const popupCloseHandler = () => {
        history.push('/');
      };
    return (
        <div className={style.container}>
            <img src={logo} alt="school icon"/>
            <Link className={style.link} to="/"><h className={style.header}>QResent</h></Link>

        

        </div>
    );
};
 
export default Header;