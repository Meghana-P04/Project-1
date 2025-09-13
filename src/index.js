import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomeTab from "./components/HomeTab";
import StudentPortal from "./components/StudentPortal";
import TeacherPortal from "./components/TeacherPortal";
import ParentPortal from "./components/ParentPortal";
import SafetyDrill from "./components/SafetyDrill";
import Quizzes from "./components/Quizzes";
import EarthquakeSim from "./components/Simulation/EarthquakeSim";
import FloodSim from "./components/Simulation/FloodSim";
import FireSim from "./components/Simulation/FireSim";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomeTab />} />
        <Route path="/student" element={<StudentPortal />} />
        <Route path="/teacher" element={<TeacherPortal />} />
        <Route path="/parent" element={<ParentPortal />} />
        <Route path="/safety-drill" element={<SafetyDrill />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/simulations/earthquake" element={<EarthquakeSim />} />
        <Route path="/simulations/flood" element={<FloodSim />} />
        <Route path="/simulations/fire" element={<FireSim />} />
      </Routes>
    </Router>
  );
}

export default App;
