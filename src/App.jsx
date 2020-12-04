import React, { Component } from 'react';
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Gallery from './components/gallery';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Projects from './components/projects';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

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
                <Route path={process.env.PUBLIC_URL + "/projects"}>
                  <Projects />
                </Route>
                <Redirect from={process.env.PUBLIC_URL + "(/?)"}
                          to={process.env.PUBLIC_URL + "/about"} />
              </Switch>
            </Router>
        );
    }
}

export default App;
