import "./Details.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
function Details() {
  const location = useLocation();
  // // 2000433
  // 2000719

  const strt = location.state.Ata;
  const daat = JSON.parse(strt);
  return (
    <div>
      <div>
        <h1>Api Details Are as Follow </h1>
      </div>
      <div className="boxx">
        <div className="content">
          <Link to="/" className="iddd">
            Home
          </Link>

          <div className="title">
            <div>id: {daat.id}</div>
          </div>

          <div className="idd">
            <div>
              neo_reference_id:{daat.neo_reference_id}
              <br />
              name:{daat.name}
              <br />
              name_limited:{daat.nameLimited}
            </div>
          </div>

          <div className="title">
            <div>
              designation:{daat.designation}
              <br />
              name_limited:{daat.name_limited}
            </div>
          </div>

          <div className="description">
            <div>
              absolute_magnitude_h:{daat.absolute_magnitude_h}
              <br />
               estimated_diameter : kilometers 
              <br />
              estimated_diameter_min:
              {daat.estimated_diameter.kilometers.estimated_diameter_min}
              <br />
              estimated_diameter_max:
              {daat.estimated_diameter.kilometers.estimated_diameter_max}
              <br />
              <br />
              <a href={daat.nasa_jpl_url}> For More Details</a>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;