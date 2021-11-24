import QRCode from "qrcode";
import React from 'react';
import { useState, useEffect } from 'react';
import style from '../styling/qrcode.module.scss';
import { Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const QRRepresent = () => {

  const[src, setSrc] = useState("");
  const[count, setCount] = useState(0);

  //let count = 0;
  let data = localStorage.getItem("USER");
  const user = JSON.parse(data);

    const usePathname = () => {
      const location = useLocation();
      const path = location.search.split('=');
      return path[1];
    }
    const token = usePathname();
   // console.log(token);
    useEffect(() => {
      QRCode.
      toDataURL("http://6abc-2a02-2f04-c10b-e100-6c67-82f1-9d5-7755.ngrok.io/qrsubmit" + "?token=" + token).then(setSrc);
     
     }, []);

    //  const increment = () => {
    //    count = count + 1;
    //  }
     const history = useHistory();
     const getLastStat = () => {
       axios
           .get("http://e4c2-89-136-175-3.ngrok.io/statLastToken/" + user.ID)
           .then((response) => {
            const jsonData =JSON.stringify(response.data);
            if(count == 1) {
              localStorage.setItem("1", jsonData);
            } else if (count == 2) {
              localStorage.setItem("2", jsonData);
            } else {
              localStorage.setItem("3", jsonData);
            }
            history.push('/teacher/profile');
       })
           .catch((error) => {
           alert(error);
           }); 

          
   };
   const onClicks = () => {
    setCount();
    getLastStat();
 }
     return (
      <div className={style.container}>
        <div className={style.card}>
        <img src={src} /> 
        <h>Scan the QR code to let me know you are present at my course.</h>
        <button onClick={() => { onClicks() }}>End session</button>
          </div>
        </div>
     );
}

export default QRRepresent;