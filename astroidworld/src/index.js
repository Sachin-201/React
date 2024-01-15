import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Details from './Details'
// import FFom from './FFom'
// import { createBrowserRouter } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <div>
         <App />
        <FFom/> 
         <Details/>
        </div> */}
  </React.StrictMode>
);
