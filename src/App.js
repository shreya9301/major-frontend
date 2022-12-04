import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import DownloadPage from "./components/DownloadPage";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {
  //const [isLoggedin, setLoggedin] = useState(false);
  // localStorage.setItem('isLoggedin',false );
  // let isLoggedin = localStorage.getItem("isLoggedin");
  return (
    <div className="App">
        <BrowserRouter>
            <Header /> 
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/register" element={<Register />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/main" element={<MainPage />}></Route>
              <Route exact path="/download" element={<DownloadPage />}></Route>
            </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
