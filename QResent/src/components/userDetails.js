import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from '../media/course.png';
import { height } from '@mui/system';
import style from '../styling/userDetails.module.scss';

export default function UserDetails() {
  let data = localStorage.getItem("USER");
  const user = JSON.parse(data);
  return <div >
    <Card sx={{ maxWidth: 500,
     height: 500,}}>
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          User Details
        </Typography>
        <div className={style.container}>
        <p >Email Address</p>
        <a>{user.email}</a>
        <p >Facultatea</p>
        <a>Automatica si Calculatoare</a>
        <p >An universitar</p>
        <a>2021</a>
        
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
</div>
}