import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Homepage} from "../pages/Homepage";
import {FirstTestPage} from "../pages/FistTestPage";
import {CurrencyTypesPage} from "../pages/CurrencyTypesPage";

export const AppRounters = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/test" element={<FirstTestPage/>}/>
        <Route path="/types" element={<CurrencyTypesPage/>}/>
      </Routes>
    </Router>
  );
}