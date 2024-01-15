import { useNavigate } from "react-router-dom";
import "./FFom.css";
import { useState } from "react";


function FFom() {
  // // 2000433
//2000719
  const navigate = useNavigate();
  let [Astoid, setAstoid] = useState("");
  let [Ata]=useState({});
  let id=[2000433,2000719,2000887,2001036,2001221,2001566,2001580,2001620,2001627,2001685,2001862,2001863,2001864,2001865,2001866,2001915,2001916,2001917,2001943,2001980]

  const Astrosubmit = async () => {
    Astoid = Number(Astoid);
    if (Astoid === 0|| Astoid === null) {
      alert("Please Enter the Astroid Id");
    } else {
      const url=
        "https://api.nasa.gov/neo/rest/v1/neo/" +
        Astoid +
        "?api_key=rsl9CbhucQ2J9DsQb7nBNd4qWrqC11T9SdUOwSSk";
        const response = await fetch(url);
        if(!response.ok){
          alert("Please Enter a Valid Astroid Id ");
        }
        else
        {
           const data = await response.json();
           Ata=JSON.stringify(data); 
           navigate("/Details", { state: { Ata: Ata } });
        }
      
    }
  };

  const RAstrosubmit = async () => {
    let t = Number(Math.floor(Math.random() * 20));
    setAstoid(id[t]);
    Astoid = Number(Astoid);
    const url =
        "https://api.nasa.gov/neo/rest/v1/neo/" +
        Astoid +
        "?api_key=rsl9CbhucQ2J9DsQb7nBNd4qWrqC11T9SdUOwSSk";
        let response = await fetch(url);
        if(response.ok){
          const data = await response.json();
           Ata=JSON.stringify(data); 
           navigate("/Details", { state: { Ata: Ata } });
        }        
  };

 

  return (
    <div>
      <div className="login">
        <div className="form">
          <h1>Welcome To the Astroid World</h1>
          <div>
            <label>
              <br></br>
              <br></br>
              <input type="number" onChange={(e) => setAstoid(e.target.value) } placeholder="Enter a Astroid ID" />
              <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn" onClick={Astrosubmit}   onKeyPress={Astrosubmit}                   >
                Submit
              </button>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <button type="submit" className="btn" onClick={RAstrosubmit}            >
                Random
              </button>
              <br></br>
              <br></br>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FFom;

