import React from 'react';
import checked from '../media/checked.png';
import style from '../styling/done.module.scss';
import { Link, useHistory } from "react-router-dom";
import {Button} from "@mui/material";

class Success extends React.Component {
    render() { 
        return <div className={style.container}>
           < img style={{width:'150px', alignSelf:'center'}} src={checked}/>
           <p>Action complete!</p>
        </div>;
    }
}
 
export default Success;