import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm.jsx";
import UrlShortener from "./components/UrlShortener.jsx";
import UrlList from "./components/UrlList.jsx";
import RedirectPage from "./components/RedirectPage.jsx";

export default function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>🚀 Evaluation + URL Shortener App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <RegisterForm />
                <hr />
                <UrlShortener />
                <hr />
                <UrlList />
              </div>
            }
          />
          <Route path="/:shortCode" element={<RedirectPage />} />
        </Routes>
      </div>
    </Router>
  );
}
