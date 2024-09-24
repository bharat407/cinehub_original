import React from "react";
import Home from "./pages/MainHome";
import { Routes, Route } from "react-router-dom";
import Artist from "./components/core/artist/Main";
import Recruiter from "./components/core/recruiter/Main";
import Register from "./components/core/artist/Register";
import Profile from "./components/core/recruiter/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/form" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
