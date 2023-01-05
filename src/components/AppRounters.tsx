import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ConverterPage} from "../pages/converter-page/ConverterPage";
import AllConversionsPage from "../pages/all-result-page/ConversionsPage";
import MePage from "../pages/me-page/MePage";
import ClickDot from "../pages/ClickDot";

export const AppRounters = () => {
  return (
    <Router >
      {/*<AppNavbar/>*/}
      <Routes >
        <Route path="/" element={<MePage />} />
        <Route path="/currency-conversion" element={<ConverterPage />} />
        <Route path="/all" element={<AllConversionsPage />} />
        <Route path="/dot" element={<ClickDot />} />
      </Routes >
    </Router >
  );
}