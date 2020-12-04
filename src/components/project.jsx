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
        
        let config = getTOML(this.projectID);

        console.log(config);
    }
    render() {
        return (
            <div id="portfolio" className="text-center">
              <div className="container">
                <div className="section-title">
                  <h2>Project {this.projectID}</h2>
                  <p>
                    re
                  </p>
                </div>
                
              </div>
            </div>
        );
    }
}

export default withRouter(Project);
