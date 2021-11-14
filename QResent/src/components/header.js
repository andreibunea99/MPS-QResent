import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styling/header.module.scss';
import logo from '../media/school-icon.png';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

class Header extends React.Component { 
    render() {  
        return <div className={style.container}>
            <img src={logo} alt="school icon"/>
            <Link className={style.link} to="/"><h className={style.header}>QResent</h></Link>
            <Link className={style.link} to="/signup"><LoginIcon className={style.icon}/></Link>
            {/* <Link className={style.link} to="./account"><h><PersonIcon/></h></Link> */}
            <Link className={style.link} to="/login"><h><LockIcon/></h></Link>
            <Link to="/qrsubmit"><h>SUBMIT</h></Link>
            <Link to="/sprofile"><h>studentProfile</h></Link>
        </div>;
    }
}
 
export default Header;