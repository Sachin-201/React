import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./Form";
import Details from "./Details";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" 
          component={Form}
          //element={<Form />}
           />
          <Route path="/Details" 
                    component={Details}
          // element={<Details />}
           />
        </Switch>
      </Router>
    );
  }
}

export default App;
