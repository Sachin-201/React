import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import Details from './Display';
import './App.css';

type Props = {
  // Define the props type here
}

type State = {
  // Define the state type here
}

class App extends Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //   // Initialize the state here
  // }

  // Define the component methods here

  render() {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1>Hello to the Home Page of the App</h1>
              <Form />
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
}

export default App;
