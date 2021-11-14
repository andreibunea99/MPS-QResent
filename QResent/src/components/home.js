import React from 'react';
import Login from './login';
import style from '../styling/home.module.scss';

class Home extends React.Component {
    render() { 
        return <div className={style.container}>
            <div className={style.bannerContainer}>
                        <div className={style.text}>
                            <a></a>
                        </div> 
           

            </div>
             <div className={style.login}><Login/></div>
            
        </div>;
    }
}
 
export default Home;