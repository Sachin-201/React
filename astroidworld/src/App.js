import "./App.css";
import { Routes, Route } from "react-router-dom";
import FFom from "./FFom";
import React from "react";
import Details from "./Details";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <h1>Hello to the Home Page of the App</h1>
            <FFom />
          </div>
        }
      />
      <Route
        path="/Details"
        element={
          <div className="App">
            <Details />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
