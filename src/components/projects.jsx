import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Project from "./project";

export class Projects extends Component {
    render() { 
        return (
            <Switch>
              <Route path={`${this.props.match.path}/:projectID`}>
                <Project />
              </Route>
              <Route path={this.props.match.path}>
                <h3>404</h3>
              </Route>
            </Switch>
        );
    }
}



export default withRouter(Projects);
