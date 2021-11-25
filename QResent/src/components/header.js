import React from 'react';
import { Link , useHistory} from 'react-router-dom';
import style from '../styling/header.module.scss';
import logo from '../media/school-icon.png';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import Logout from './logout';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
const Header = () => { 
    const history = useHistory();
    const popupCloseHandler = () => {
        history.push('/');
      };
    return (
        <div className={style.container}>
            <img src={logo} alt="school icon"/>
            <Link className={style.link} to="/"><h className={style.header}>QResent</h></Link>            
            <LoginIcon style={{cursor:"pointer"}} onClick={() => popupCloseHandler()}/>

        </div>
    );
};
 
export default Header;