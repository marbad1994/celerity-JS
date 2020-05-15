import React from 'react';
import logo from './logo2.png';
import Login from './components/login';
import NavbarC from './components/navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <NavbarC/>
  );
}



const logins = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

export default App;
