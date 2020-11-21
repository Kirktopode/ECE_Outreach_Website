import React, { Component } from "react";
import Card from "./card/Card"
import Navigation from "./navigation";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">

        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              These are the projects that our team has developed for teaching your students.
              Some of these are meant to be hands-on workshops, others are flashy demonstrations,
              and all are primed for ECE education!
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <Card src="./cards/solar_cars" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
