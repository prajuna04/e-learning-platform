import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import TechCamp from "./pages/TechCamp";
import Knowledgebase from "./pages/AIKnowledgebase";
import Grid from "./pages/Grid";
import DropdownMenu from "./pages/DropdownMenu";
import Footer from "./components/Footer";
// You can add other pages like KnowledgebasePage later

function Routes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/knowledgebase" element={<Knowledgebase />} />
        <Route path="/TechCamp" element={<TechCamp />} />
        <Route path="/Grid" element={<Grid />} />
        <Route path="/DropdownMenu" element={<DropdownMenu />} />
        {/* Later add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default Routes;
