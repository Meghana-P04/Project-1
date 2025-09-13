import React from "react";
import { Link } from "react-router-dom";

export default function HomeTab() {
  return (
    <div>
      <h2>Welcome to Disaster Preparedness Platform</h2>
      <nav>
        <ul>
          <li><Link to="/safety-drill">Safety Drill</Link></li>
          <li><Link to="/quizzes">Quizzes</Link></li>
          <li><Link to="/simulations/earthquake">Earthquake Simulation</Link></li>
          <li><Link to="/simulations/flood">Flood Simulation</Link></li>
          <li><Link to="/simulations/fire">Fire Accident Simulation</Link></li>
        </ul>
      </nav>
    </div>
  );
}
