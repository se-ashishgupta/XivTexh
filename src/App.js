import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import AIandRPAautomation from "./Component/AIandRPAautomation";
import "./styles/app.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AIandRPAautomation" element={<AIandRPAautomation />} />
        <Route path="/enterprise-apps" element={<AIandRPAautomation />} />
        <Route
          path="/delivery-pipeline-automation"
          element={<AIandRPAautomation />}
        />
        <Route path="/cloud" element={<AIandRPAautomation />} />
      </Routes>
    </Router>
  );
};

export default App;
