import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./MyComponents/Header";
import { WebCam } from "./MyComponents/webcam";
import { Dashboard } from "./MyComponents/Dashboard";
import validator from 'validator';

import {
  BrowserRouter as ROUTER,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [errorMessage, setErrorMessage] = useState('')
  
  const validate = (textInput) => {
  
    if (validator.isPassportNumber(textInput,'IN')) {
      setErrorMessage('Is Valid Passport Number')
    } else {
      setErrorMessage('Is Invalid Passport Number')
    }
  }
  return (
    <>
      <Header searchBar={false} />
      <Dashboard></Dashboard>
      <WebCam WebCam={WebCam}></WebCam>

      {/* <div style={{
      marginLeft: '200px',
    }}>
        <h2>Validate Passport Number with ReactJS</h2>
        <span>Enter Passport Number: </span><input type="text"
          onChange={(e) => validate(e.target.value)}></input> <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
    </div> */}
    </>
  );

}
export default App;
