import React from "react";
import { Container } from "@mui/system";
import Header from "./components/Header";
import MusicScreen from "./screens/MusicScreen";
import Shop from './screens/Shop';
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MusicScreen/>} />
        <Route path="/AboutUs" element={<AboutUs/> }/>
        <Route path="/Shop" element={<Shop />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
      
     
    </>
  );
};

export default App;
