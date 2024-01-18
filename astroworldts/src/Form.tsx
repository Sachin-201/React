import React from 'react';
// import { Navigate } from "react-router-dom";
import withRouter from "./withRouter";
import "./Form.css";
const APIKEY = "rsl9CbhucQ2J9DsQb7nBNd4qWrqC11T9SdUOwSSk";
const baseurl = "https://api.nasa.gov/neo/rest/v1/neo/";
// https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=rsl9CbhucQ2J9DsQb7nBNd4qWrqC11T9SdUOwSSk
interface State {
  Astoid: string;
  data: any
  Apicall: boolean;
}

class Form extends React.Component<{ navigate: (str: string, any: any) => void }, State> {
  // navigate = new Navigate();        //yha error hai

  constructor(props: any ) {
    super(props);
    this.state = {
      Astoid: "",
      data: null,
      Apicall: false
    };
  }

  Astrosubmit = async () => {
    try {
      if (this.state.Astoid === "") {
        alert("Please Enter A Valid Astroid ID don't enter null ");
        return;
      }

      this.setState({ Apicall: true });
      const response = await fetch(baseurl + this.state.Astoid + "?api_key=" + APIKEY);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      this.setState({ data: responseData });
      console.log("Data Recibed From the "+responseData);
      this.props.navigate("/Details", { state: responseData });
    } 
    catch (error) {
      alert("Please Enter A Valid Astroid ID ");
    }
     finally {
      this.setState({ Apicall: false });
    }
  };

  RAstrosubmit = async () => {
    try {
      this.setState({ Apicall: true });
      const response = await fetch(baseurl + "browse?api_key=" + APIKEY);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const randomdata = data.near_earth_objects[Math.floor(Math.random() * 20)];
      this.setState({data:randomdata});
      console.log(randomdata);
      this.props.navigate("/Details", {state:randomdata});

      //randomdata = JSON.stringify(randomdata);
      //this.Detailcall(randomdata)


    } 
    catch (error: any) {
      alert("Error occured Please refresh "+ error);
    } finally {
      this.setState({ Apicall: false });
    }
  };

  render() {
    // const { Astoid ,data, Apicall } = this.state;

    return (
      <div>
        <div className="login">
          <div className="form">
            <h1>Welcome To the Astroid World</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <label>
                  <input
                    type="number"
                    onChange={(e) => this.setState({ Astoid: e.target.value })}
                    placeholder="Enter a Astroid ID"
                  />
                  <button
                    type="submit"
                    disabled={this.state.Apicall || !(this.state.Astoid.length === 7)}
                    className="btn"
                    onClick={this.Astrosubmit}
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    disabled={this.state.Apicall}
                    className="btn"
                    onClick={this.RAstrosubmit}
                  >
                    Random
                  </button>
                  <br />
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Form);
