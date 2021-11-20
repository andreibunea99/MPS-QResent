import QRCode from "qrcode";
import React from 'react';
import { useState, useEffect } from 'react';
import style from '../styling/qrcode.module.scss';


const QRRepresent = () => {
    const [src, setSrc] = useState("");
    useEffect(() => {
      QRCode.toDataURL("http://55df-2a02-2f04-c114-800-916e-66fc-9b43-e726.ngrok.io/qrsubmit").then(setSrc);
     
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