import React, { Component } from "react";
import Card from "../Card"
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
              <div className="col-sm-6 col-md-4 col-lg-4">
                  <Card src="./cards/lights" />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                  <Card src="./cards/spark" />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                  <Card src="./cards/lights" />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                  <Card src="./cards/spark" />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                  <Card src="./cards/lights" />
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                  <Card src="./cards/spark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
