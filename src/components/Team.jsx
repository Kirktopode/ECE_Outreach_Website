import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Meet our wonderful team of electrical and computer engineering students!
            </p>
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
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
                        left: 15
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
                        <p>{d.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
