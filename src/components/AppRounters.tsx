import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ConverterPage} from "../pages/ConverterPage";
import Homepage from "../pages/Homepage";
import AppNavbar from "./AppNavbar";
import BRLResultsPage from "../pages/BRLResultsPage";
import MePage from "../pages/me-page/MePage";

export const AppRounters = () => {
  return (
    <Router>
      <AppNavbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/personal-page" element={<MePage/>}/>
        <Route path="/currency-conversion" element={<ConverterPage/>}/>
        <Route path="/contacts" element={<MePage/>}/>
        <Route path="/all" element={<BRLResultsPage/>}/>
      </Routes>
    </Router>
  );
}