import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../home/Home';
import AboutMe from '../aboutMe/AboutMe';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" from component={Home} />
          <Route exact path="/aboutme" from component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}
