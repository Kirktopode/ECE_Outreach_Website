import React, { Component } from "react";
import { withRouter } from "react-router";
import { getTOML, getCardItem } from "./card/Card";

export class Project extends Component {
    constructor(props) {
        super(props);
        this.projectID = props.match.params.projectID;
        
        this.config = getTOML(this.projectID);
    }
    render() {
        let content = getCardItem(this.projectID, this.config.center.main_page);
        return (
            <div id="portfolio" className="text-center">
              <div className="container">
                <div className="section-title">
                  <h2>{this.config.center.title}</h2>
                  <p>
                    {this.config.center.description}
                  </p>
                </div>
                <div dangerouslySetInnerHTML={{__html: content}}>
		</div>
              </div>
            </div>
        );
    }
}

export default withRouter(Project);
