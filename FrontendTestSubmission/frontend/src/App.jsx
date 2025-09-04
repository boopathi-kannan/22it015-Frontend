import React from "react";
import { Routes, Route, NavLink } from "react-router-dom"; 
import URLShortener from "./components/URLShortener";
import URLStatistics from "./components/URLStatistics";
import RedirectPage from "./components/RedirectPage";

export default function App() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" end>
          URL Shortener
        </NavLink>
        <NavLink to="/stats">Statistics</NavLink>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<URLShortener />} />
          <Route path="/stats" element={<URLStatistics />} />
          <Route path="/redirect/:code" element={<RedirectPage />} />
        </Routes>
      </div>
    </>
  );
}
