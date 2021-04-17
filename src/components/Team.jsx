import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

export class Team extends Component {
  render() {
    console.log(this.props)
    const { teamData, alumData } = this.props
    console.log({teamData, alumData})
    return (
      <div>
        <div id="team" className="text-center">
          <div className="container">
            <div className="col-md-8 col-md-offset-2 section-title">
              <h2>Meet the Team</h2>
              <p>
                Meet our wonderful team of electrical and computer engineering students!
              </p>
            </div>
            <div id="row">
              {this.props.teamData
                ? this.props.teamData.map((d, i) => (
                    <div
                      key={`${d.name}-${i}`}
                      className={i % 5 == 0? "col-md-2 col-md-offset-1 col-sm-6 team" : "col-md-2 col-sm-6 team"}
                    >
                      <div
                        className="thumbnail" 
                        style={{
                          height: '560px',
                          textAlign: 'center'
                        }}>
                        {" "}
                        <div 
                        style={{
                          height: '320px',
                          position: 'relative',
                          width: '220px',
                          overflow: 'hidden',
                          left: -10
                        }}>
                          <img src={d.img} alt={d.name} className="team-img" 
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: -10
                            }}/>
                        </div>
                        <div className="caption">
                          <h4>{d.name}</h4>
                          <p>{d.job}</p>
                          <p>{d.description || "..."}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
          <div className="container">
            <div className="col-md-8 col-md-offset-2 section-title">
              <h2>Alumni</h2>
              <p>
                These former members of ECE Outreach are now building exciting careers in electrical and computer engineering!
              </p>
            </div>
            <div id="row">
              {this.props.alumData
                ? this.props.alumData.map((d, i) => (
                    
                    <div
                      key={`${d.name}-${i}`}
                      className={i % 5 == 0? "col-md-2 col-md-offset-1 col-sm-6 team" : "col-md-2 col-sm-6 team"}
                    >
                      <div
                        className="thumbnail" 
                        style={{
                          height: '520px',
                          textAlign: 'center'
                        }}>
                        {" "}
                        <div 
                        style={{
                          height: '320px',
                          position: 'relative',
                          width: '220px',
                          overflow: 'hidden',
                          left: -10
                        }}>
                          <img src={d.img} alt={d.name} className="team-img" 
                            style={{
                              position: 'absolute',
                              bottom: 0,
                              left: -10
                            }}/>
                        </div>
                        <div className="caption">
                          <h4>{d.name}</h4>
                          <p>{d.graduation}</p>
                          <p>{d.quote}</p>
                          <p><SocialIcon url={d.linkedin} /></p>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Team;
