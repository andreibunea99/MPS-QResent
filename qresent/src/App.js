import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Header from './components/header';
import QRRepresent from "./components/qrcode";
import SignUp from "./components/signup";
//import SignInOutContainer from "./containers/sign-inout-container";


function App() {
  return (
    <div className="App">
      <div className="Container">
        <BrowserRouter>
        <Header/>
        <Routes>
          {/* <Route exact path='/' component={SignInOutContainer} /> */}
					<Route exact path='/' component={Login} />
          </Routes>
          <Login/>
          <SignUp/>
        </BrowserRouter>
        <QRRepresent text="ceva"/>
      </div>
  </div>
  );
};

export default App;