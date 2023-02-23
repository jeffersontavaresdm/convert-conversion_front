import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ConverterPage } from "../pages/currency-converter/ConverterPage";
import AllConversionsPage from "../pages/currency-converter/ConversionsPage";
import ClickDot from "../pages/other-pages/ClickDot";
import Homepage from "../pages/home-page/Homepage";
import AppNavbar from "./AppNavbar";

export const AppRounters = () => {
  return (
    <Router >
      <AppNavbar />
      <Routes >
        <Route path="/" element={ <Homepage /> } />
        <Route path="/currency-conversion" element={ <ConverterPage /> } />
        <Route path="/all" element={ <AllConversionsPage /> } />
        <Route path="/dot" element={ <ClickDot /> } />
      </Routes >
    </Router >
  );
}