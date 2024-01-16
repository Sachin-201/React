import { useNavigate } from "react-router-dom";
import "./FFom.css";
import { useState } from "react";
const APIKEY = "rsl9CbhucQ2J9DsQb7nBNd4qWrqC11T9SdUOwSSk";
const baseurl = "https://api.nasa.gov/neo/rest/v1/neo/";

function FFom() {
  const navigate = useNavigate();
  let [Astoid, setAstoid] = useState("");
  let [Apicall, SetApicall] = useState(false);

  const Detailcall = async (data) => {
    navigate("/Details", { state: { data: data } });
  };

  const Astrosubmit = async () => {
    try {
      console.log(Astoid);
      console.log("data ype of Astoid ", typeof Astoid);
      if (Astoid === "") {
        alert("Please Enter A Valid Astroid ID don't enter null ");
        return;
      }
      console.log("Submit is called", Astoid);
      SetApicall(true);
      const response = await fetch(baseurl + Astoid + "?api_key=" + APIKEY);
      let data = await response.json();
      data = JSON.stringify(data);
      Detailcall(data);
    } catch (error) {
      alert("Please Enter A Valid Astroid ID ");
    } finally {
      SetApicall(false);
    }
  };

  const RAstrosubmit = async () => {
    try {
      SetApicall(false);
      const response = await fetch(baseurl + "browse?api_key=" + APIKEY);
      let data = await response.json();
      let randomdata = data.near_earth_objects[Math.floor(Math.random() * 20)];
      randomdata = JSON.stringify(randomdata);
      Detailcall(randomdata);
    } catch (error) {
      alert("Error occured Please refresh ", error);
    } finally {
      SetApicall(false);
    }
  };

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
                  onChange={(e) => setAstoid(e.target.value)}
                  placeholder="Enter a Astroid ID"
                />
                <button
                  type="submit"
                  disabled={Apicall || !(Astoid.length === 7)}
                  className="btn"
                  onClick={Astrosubmit}
                >
                  Submit
                </button>
                <button
                  type="submit"
                  disabled={Apicall}
                  className="btn"
                  onClick={RAstrosubmit}
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

export default FFom;
