import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Header from './components/header';
import SignUp from "./components/signup";
//import SignInOutContainer from "./containers/sign-inout-container";
import Student from './components/studentProfile';
import Teacher from './components/teacherProfile';
import Admin from './components/adminstratorProfile';
import QrSubmit from "./components/qrSubmit";
import QrCode from "./components/qrcode";
import ManageAccount from './components/manageAccount';
import Success from './components/success';
import ConfigCourse from './components/configCourse';
import SList from './components/generateStudentsList';
import teachersList from './components/teachersList';
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
          <Route exact path='/qrcode' component={QrCode} />
          <Route exact path='/done' component={Success} />
          <Route exact path='/manageAccount' component={ManageAccount} />
          <Route exact path='/teacher/profile' component={Teacher} />
          <Route exact path='/student/profile' component={Student} />
          <Route exact path='/admin/profile' component={Admin} />
          <Route exact path='/configcourse' component={ConfigCourse} />
          <Route exact path='/generateQRList' component={SList} />
          <Route exact path='/teachersList' component={teachersList} />
        </Switch>
        </BrowserRouter>   
      </div>
  </div>
  );
};

export default App;