import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ConverterPage} from "../pages/converter-page/ConverterPage";
import AllConversionsPage from "../pages/all-result-page/ConversionsPage";
import ClickDot from "../pages/ClickDot";
import Homepage from "../pages/home-page/Homepage";
import FirstElement from "../pages/FirstElement";
import AppNavbar from "./AppNavbar";

export const AppRounters = () => {
  return (
    <Router >
      <AppNavbar />
      <Routes >
        <Route path="/f" element={ <FirstElement /> } />
        <Route path="/" element={ <Homepage /> } />
        <Route path="/currency-conversion" element={ <ConverterPage /> } />
        <Route path="/all" element={ <AllConversionsPage /> } />
        <Route path="/dot" element={ <ClickDot /> } />
      </Routes >
    </Router >
  );
}