import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { withRouter } from "react-router";
import { getTOML } from "./card/Card";

export class Project extends Component {
    constructor(props) {
        super(props);
        this.projectID = props.match.params.projectID;
        
        this.config = getTOML(this.projectID);
    }
    render() {
        return (
            <div id="portfolio" className="text-center">
              <div className="container">
                <div className="section-title">
                  <h2>{this.config.center.title}</h2>
                  <p>
                    {this.config.center.description}
                  </p>
                </div>
                
              </div>
            </div>
        );
    }
}

export default withRouter(Project);
