import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ConverterPage} from "../pages/converter-page/ConverterPage";
import Homepage from "../pages/home-page/Homepage";
import AppNavbar from "./AppNavbar";
import AllConversionsPage from "../pages/all-result-page/ConversionsToBRLPage";
import MePage from "../pages/me-page/MePage";
import ClickDot from "../pages/ClickDot";

export const AppRounters = () => {
  return (
    <Router>
      <AppNavbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/personal-page" element={<MePage/>}/>
        <Route path="/currency-conversion" element={<ConverterPage/>}/>
        <Route path="/contacts" element={<MePage/>}/>
        <Route path="/all" element={<AllConversionsPage/>}/>
        <Route path="/dot" element={<ClickDot/>}/>
      </Routes>
    </Router>
  );
}