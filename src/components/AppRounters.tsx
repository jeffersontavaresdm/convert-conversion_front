import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {FistPage} from "../pages/FistTestPage";
import {CurrencyConversionPage} from "../pages/CurrencyConversionPage";
import Homepage from "../pages/Homepage";
import AppNavbar from "./AppNavbar";
import ViewAllResultsPage from "../pages/ViewAllResultsPage";

export const AppRounters = () => {
  return (
    <Router>
      <AppNavbar/>
      <Routes>
        <Route path="/test" element={<FistPage/>}/>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/currency-conversion" element={<CurrencyConversionPage/>}/>
        <Route path="/all" element={<ViewAllResultsPage/>}/>
      </Routes>
    </Router>
  );
}