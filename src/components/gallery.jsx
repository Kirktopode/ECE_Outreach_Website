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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                dapibus leonec.
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
