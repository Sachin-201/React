import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Details from "./Details";
import "./App.css";

class App extends React.Component {
  render() {
    return (
     // <Router>
        <Routes>
          <Route path="/" 
          //component={Form}
          element={<Form />}
           />
          <Route path="/Details" 
          //          component={Details}
           element={<Details />}
           />
        </Routes>
     // </Router>
    );
  }
}

export default App;
