import React from 'react';
import { Landing } from '../landing/Landing';
import { AboutMe } from '../aboutMe/AboutMe';
import { Projects } from '../projects/Projects';
import { TechStack } from '../techStack/TechStack';
import { Contact } from '../contact/Contact';

export const Home = () => {
  return (
    <div id="top">
      <Landing />
      <AboutMe />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
};
