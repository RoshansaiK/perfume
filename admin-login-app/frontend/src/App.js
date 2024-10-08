import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import CreateAdmin from "./components/CreateAdmin"; // Import CreateAdmin

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/create-admin" element={<CreateAdmin />} />{" "}
        {/* Add the route for CreateAdmin */}
      </Routes>
    </Router>
  );
};

export default App;
