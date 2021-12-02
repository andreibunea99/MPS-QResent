import QRCode from "qrcode";
import React from 'react';
import { useState, useEffect } from 'react';
import style from '../styling/qrcode.module.scss';
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";


const QRRepresent = () => {

  const[src, setSrc] = useState("");

  //let count = 0;
  let data = localStorage.getItem("USER");
  const user = JSON.parse(data);
const history = useHistory();
    const usePathname = () => {
      const location = useLocation();
      const path = location.search.split('=');
      return path[1];
    }
    const goBack = () => {
      history.push('/teacher/profile');
    }
    const token = usePathname();
   // console.log(token);
    useEffect(() => {
      QRCode.
      toDataURL("http://c4ae-2a02-2f0e-780c-900-f0b1-187b-6b-5b8d.ngrok.io/qrsubmit" + "?token=" + token).then(setSrc);
     
     }, []);
 
     return (
      <div className={style.container}>
        <div className={style.card}>
        <img src={src} /> 
        <h>Scan the QR code to let me know you are present at my course.</h>
        <button className={style.buttonC} onClick={() => goBack()}>End session</button>
          </div>
        </div>
     );
}

export default QRRepresent;