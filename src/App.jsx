import React, { Component } from 'react'
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
} from "react-router-dom"
// import Card from "./Card";

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
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
          <Route path="/ECE_Outreach_Website/gallery">
            <Gallery />
          </Route>
          <Route path="/ECE_Outreach_Website/team">
            <Team data={this.state.landingPageData.Team} />
          </Route>
          <Route path="/ECE_Outreach_Website/contact">
            {/* <Features data={this.state.landingPageData.Features} /> */}
            <Contact data={this.state.landingPageData.Contact} />
          </Route>
          <Route path="/ECE_Outreach_Website">
            <Header data={this.state.landingPageData.Header} />
            <About data={this.state.landingPageData.About} />
          </Route>
          <Route path="/">
            <Redirect to="/ECE_Outreach_Website" />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
