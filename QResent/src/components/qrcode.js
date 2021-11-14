import QRCode from "qrcode";
import React from 'react';
import { useState, useEffect } from 'react';

const QRRepresent = () => {
    const [src, setSrc] = useState("");
    useEffect(() => {
      QRCode.toDataURL("http://55df-2a02-2f04-c114-800-916e-66fc-9b43-e726.ngrok.io/qrsubmit").then(setSrc);
     
     }, []);
     return (
        <img src={src} />
     );
}

export default QRRepresent;