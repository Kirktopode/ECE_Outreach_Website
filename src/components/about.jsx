import React, { Component } from 'react'
import {
    Redirect,
} from "react-router-dom"

export class about extends Component {

  componentDidMount() {
    // if (window.location.href.indexOf("?/") !== -1)
    //   window.location.replace(window.location.href.replace("?/",""))
  }

  render() {
    if (window.location.href.indexOf("?/") !== -1)
      return (
        <Redirect to={process.env.PUBLIC_URL + "/" + window.location.href.split("/")[-1]} />
      )
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                {/* <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul> */}
                      {/* {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'} */}
                    {/* </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul> */}
                    {/* {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'} */}
{/* 
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
