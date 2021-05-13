import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Landing } from '../landing/Landing';
import { AboutMe } from '../aboutMe/AboutMe';
import { TechStack } from '../techStack/TechStack';
import { Contact } from '../contact/Contact';
import { Projects } from '../projects/Projects';
import { Home } from '../home/Home';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/techstack" component={TechStack} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </>
  );
}
