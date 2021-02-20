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
        if(this.config.center.main_page==="") {
            // special case: unfinished
            return (
                <div id="portfolio" className="text-center">
                  <div className="container">
                    <div className="section-title">
                      <h2>{this.config.center.title}</h2>
                      <p>
                        {this.config.center.description}
                      </p>
                    </div>
                    <div>
                      <h1>In Progress</h1>
                      We are still working on adding exciting informational content to this page. Please check again soon!
		    </div>
                  </div>
                </div>
            );
        } else {
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
}

export default withRouter(Project);
