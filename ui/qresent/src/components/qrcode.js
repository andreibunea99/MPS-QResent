import QRCode from "qrcode";
import React from 'react';
import { useState, useEffect } from 'react';

const QRRepresent = ({text}) => {
    const [src, setSrc] = useState("");
    useEffect(() => {
      QRCode.toDataURL(text).then(setSrc);
     }, []);
     return (
        <img src={src} />
     );
}

export default QRRepresent;