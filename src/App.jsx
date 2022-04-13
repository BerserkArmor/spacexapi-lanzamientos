import { Routes, Route } from "react-router-dom";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetails";
import { RocketDetails } from "./components/RocketDetails";
import { NavBar } from "./components/NavBar";
import { ScrollTop } from "./components/ScrollTop";

import React from "react";
import "./assets/main.css";

export function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
      <ScrollTop />
    </>
  );
}
