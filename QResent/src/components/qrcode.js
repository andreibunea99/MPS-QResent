import QRCode from "qrcode";
import React from 'react';
import { useState, useEffect } from 'react';
import style from '../styling/qrcode.module.scss';
import { Link, useHistory, useLocation } from "react-router-dom";
import { LocationOnSharp } from "@mui/icons-material";

const QRRepresent = () => {
    const [src, setSrc] = useState("");

    const usePathname = () => {
      const location = useLocation();
      const path = location.search.split('=');
      return path[1];
    }
    const token = usePathname();
    console.log(token);
    useEffect(() => {
      QRCode.
      toDataURL("http://2c55-2a02-2f04-c114-800-9155-5bac-3752-de72.ngrok.io/qrsubmit" + "?token=" + token).then(setSrc);
     
     }, []);
     return (
      <div className={style.container}>
      <div className={style.card}>
      <img src={src} /> 
      <h>Scan the QR code to let me know you are present at my course.</h>
      </div>
        </div>

     );
}

export default QRRepresent;