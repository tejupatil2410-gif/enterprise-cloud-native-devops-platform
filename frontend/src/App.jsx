import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {

  return (

    <div>

      <Navbar />

      <div className="container">

        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Home />} />

          <Route path="/admin" element={<Admin />} />

        </Routes>

      </div>

    </div>

  );

}

export default App;