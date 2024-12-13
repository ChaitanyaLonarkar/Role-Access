import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import toast, { Toaster } from "react-hot-toast";
import Admin from "./Pages/Admin";
import Manager from "./Pages/Manager";
import User from "./Pages/User";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="home">
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="admin" element={<Admin />} />
            <Route path="manager" element={<Manager />} />
            <Route path="user" element={<User/>} />
            
          </Routes>
        </div>
      </BrowserRouter>
      <div><Toaster/></div>

    </>
  );
}

export default App;
