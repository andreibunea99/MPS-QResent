import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Header from './components/header';
import QRRepresent from "./components/qrcode";
import SignUp from "./components/signup";
//import SignInOutContainer from "./containers/sign-inout-container";
import QrSubmit from "./components/qrSubmit";
import StudentProfile from './components/studentProfile';
import ProfessorProfile from './components/professorProfile';
import AdminProfile from './components/adminstratorProfile';
import ManageAccount from './components/manageAccount';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <BrowserRouter>
        <Header/>
        <Switch>
          {/* <Route exact path='/' component={SignInOutContainer} /> */}
          <Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/qrsubmit' component={QrSubmit} />
          <Route exact path='/pprofile' component={ProfessorProfile} />
          <Route exact path='/sprofile' component={StudentProfile} />
          <Route exact path='/aprofile' component={AdminProfile} />

          <Route exact path='/manageAccount' component={ManageAccount} />
        </Switch>
          {/* <Login/> */}
        </BrowserRouter>
        {/* <QRRepresent/> */}
      </div>
  </div>
  );
};

export default App;