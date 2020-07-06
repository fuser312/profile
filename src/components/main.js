import React from 'react';

import LandingPage from "./landingPage";
import {Switch, Route, Router} from "react-router-dom";
import Projects from "./projects";
import Resume from "./resume";
import AboutMe from "./aboutMe";
import ContactMe from "./contactMe";

const Main = () => {
    return (
        <Router basename={'/profile'}>
  <Switch>

      <Route exact path ="/" component ={LandingPage}/>
      <Route path ="/resume/" component ={Resume}/>
      <Route path ="/contactme/" component ={ContactMe}/>
      <Route exact path ="/aboutme/" component ={AboutMe}/>
      <Route exact path ="/projects/" component ={Projects}/>
   
  </Switch>
        </Router>

    );
}

export default Main;
