import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./FFom.css";

const APIKEY: string = "rsl9CbhucQ2J9DsQb7nBNd4qWrqC11T9SdUOwSSk";
const baseurl: string = "https://api.nasa.gov/neo/rest/v1/neo/";

interface Props {
  // Define the props type here
}

interface State {
  Astoid: string;
  Apicall: boolean;
}

@Component class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Initialize the state here
    this.state = {
      Astoid: "",
      Apicall: false,
    };
    // Bind the methods here
    this.Detailcall = this.Detailcall.bind(this);
    this.Astrosubmit = this.Astrosubmit.bind(this);
    this.RAstrosubmit = this.RAstrosubmit.bind(this);
  }

  // Define the component methods here
  async Detailcall(data: any) {
    useNavigate().push("/Details", { state: { data: data } });
  }

  async Astrosubmit() {
    try {
      console.log(this.state.Astoid);
      console.log("data ype of Astoid ", typeof this.state.Astoid);
      if (this.state.Astoid === "") {
        alert("Please Enter A Valid Astroid ID don't enter null ");
        return;
      }
      console.log("Submit is called", this.state.Astoid);
      this.setState({ Apicall: true });
      const response = await fetch(baseurl + this.state.Astoid + "?api_key=" + APIKEY);
      let data = await response.json();
      data = JSON.stringify(data);
      this.Detailcall(data);
    } catch (error) {
      alert("Please Enter A Valid Astroid ID ");
    } finally {
      this.setState({ Apicall: false });
    }
  }

  async RAstrosubmit() {
    try {
      this.setState({ Apicall: true });
      const response = await fetch(baseurl + "browse?api_key=" + APIKEY);
      let data = await response.json();
      let randomdata = data.near_earth_objects[Math.floor(Math.random() * 20)];
      randomdata = JSON.stringify(randomdata);
      this.Detailcall(randomdata);
    } catch (error: any) {
      alert("Error occured Please refresh ") //, error);
    } finally {
      this.setState({ Apicall: false });
    }
  }

  render() {
    return (
      <div>
        <div className="login">
          <div className="form">
            <h1>Welcome To the Astroid World</h1>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
              <div>
                <label>
                  <input
                    type="number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      this.setState({ Astoid: e.target.value })
                    }
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
    ) as JSX.Element;
  }
}

export default Form;
