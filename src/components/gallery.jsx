import React, { Component } from "react";
import Card from "./card/Card";
import CardScroll from "./card/CardScroll";

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
            <CardScroll>
              <Card src="solar_cars"/>
              <Card src="spark"/>
              <Card src="levitating_led"/>
              <Card src="tesla_coil"/>
            </CardScroll>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
