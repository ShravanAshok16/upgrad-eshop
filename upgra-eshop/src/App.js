import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from "./components/Home/dashboard";

function App() {
return(
            <BrowserRouter>
                            <Routes>
                            <Route path="/signup" element={<Signup/>} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/dashboard" element={<Dashboard/>} />
                            <Route exact path="/" element={<Home/>} />
                            </Routes>
           </BrowserRouter>
        );
}

export default App;
