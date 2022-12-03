import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import DownloadPage from "./components/DownloadPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/main" element={<MainPage />}></Route>
          <Route exact path="/download" element={<DownloadPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
