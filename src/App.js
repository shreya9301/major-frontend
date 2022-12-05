import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import DownloadPage from "./components/DownloadPage";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  // const [isLoggedin, setIsLoggedin] = useState("false")
  return (
    <div className="App">
        <BrowserRouter>
            <Header /> 
            <Routes>
        
              <Route exact path="/home" element={<Home />}></Route> 
              <Route exact path="/download" element={<DownloadPage />}></Route>
              <Route exact path="/main" element={<MainPage />}></Route>
              <Route exact path="/" element={<Home />}></Route>        
            </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
