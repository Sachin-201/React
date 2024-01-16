import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Location } from "history";
import "./Display.css";

type Props = {
  location: Location;
};

type State = {};

class Display extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const data = JSON.parse(this.props.location.state.data);
    const {
      id,
      name,
      neo_reference_id,
      nameLimited,
      designation,
      name_limited,
      absolute_magnitude_h,
      estimated_diameter: { kilometers: { estimated_diameter_min, estimated_diameter_max } },
      nasa_jpl_url,
    } = data;

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
              <div>id: {id}</div>
            </div>

            <div className="idd">
              <div>
                neo_reference_id:{neo_reference_id}
                <br />
                name:{name}
                <br />
                name_limited:{nameLimited}
              </div>
            </div>

            <div className="title">
              <div>
                designation:{designation}
                <br />
                name_limited:{name_limited}
              </div>
            </div>

            <div className="description">
              <div>
                absolute_magnitude_h:{absolute_magnitude_h}
                <br />
                estimated_diameter : kilometers
                <br />
                estimated_diameter_min:
                {estimated_diameter_min}
                <br />
                estimated_diameter_max:
                {estimated_diameter_max}
                <br />
                <br />
                <a href={nasa_jpl_url}> For More Details</a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Display);
