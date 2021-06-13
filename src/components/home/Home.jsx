import React from 'react';
import { Landing } from '../landing/Landing';
import { AboutMe } from '../aboutMe/AboutMe';
import { Projects } from '../projects/Projects';
import { TechStack } from '../techStack/TechStack';
import { Contact } from '../contact/Contact';
import styles from './Home.css';

export const Home = () => {
  return (
    <div id="top" className={styles.container}>
      <Landing />
      <AboutMe />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
};
