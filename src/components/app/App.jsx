import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Landing from '../landing/Landing';
import AboutMe from '../aboutMe/AboutMe';
import TechStack from '../techStack/TechStack';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" from component={Landing} />
          <Route exact path="/techstack" from component={TechStack} />
          <Route exact path="/aboutme" from component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}
