import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {CurrencyConversionPage} from "../pages/CurrencyConversionPage";
import Homepage from "../pages/Homepage";
import AppNavbar from "./AppNavbar";
import ViewAllResultsPage from "../pages/ViewAllResultsPage";
import MePage from "../pages/MePage";

export const AppRounters = () => {
  return (
    <Router>
      <AppNavbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/personal-page" element={<MePage/>}/>
        <Route path="/currency-conversion" element={<CurrencyConversionPage/>}/>
        <Route path="/contacts" element={<MePage/>}/>
        <Route path="/all" element={<ViewAllResultsPage/>}/>
      </Routes>
    </Router>
  );
}