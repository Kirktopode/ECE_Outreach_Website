import React, { Component } from 'react';
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
// import Services from './components/services';
import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
// import Card from "./Card";

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
      this.setState({landingPageData : JsonData});
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {

    // const example = (

    //   <Router>
    //       <Link to="/contact" className="header-link">About Us</Link>
    //       <Switch>
    //           <Route path="/signup">
    //               <Signup
    //                   handleSignup={this.handleSignup}
    //                   clearError={this.clearSignupError}
    //                   error={this.state.signupError}
    //               />
    //           </Route>
    //           <Route path="/">
    //               <FrontPage />
    //           </Route>
    //       </Switch>
    //   </Router>
      // )
      
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/gallery"}>
            <Gallery />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/team"}>
            <Team data={this.state.landingPageData.Team} />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/contact"}>
            {/* <Features data={this.state.landingPageData.Features} /> */}
            <Contact data={this.state.landingPageData.Contact} />
          </Route>
          <Route path={process.env.PUBLIC_URL + "/about"}>
            <Header data={this.state.landingPageData.Header} />
            <About data={this.state.landingPageData.About} />
          </Route>
          <Redirect from={process.env.PUBLIC_URL + "(/?)"}
                    to={process.env.PUBLIC_URL + "/about"} />
        </Switch>
      </Router>
    );
  }
}

export default App;
