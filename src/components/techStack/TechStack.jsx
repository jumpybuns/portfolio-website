import React from 'react';
import Header from '../header/Header';
import { HashLink as Link } from 'react-router-hash-link';
import upArrow from '../../../public/upArrow.png';
import styles from './TechStack.css';

export const TechStack = () => {
  return (
    <div id="techstack" className={styles.gridContainer}>
      <h1 className={styles.techStack}>TECH STACK</h1>
      <div className={styles.languages}>
        <h2 className={styles.techs}>Languages</h2>
        <pre>Javascript HTML CSS Python</pre>
      </div>
      <div className={styles.frontEnd}>
        <h2 className={styles.techs}>Front End</h2>
        <pre>React D3 Material-UI Netlify</pre>
      </div>
      <div className={styles.backEnd}>
        <h2 className={styles.techs}>Back End</h2>
        <pre>Node.JS PostgreSQL Express BCrypt</pre>
      </div>
      <div className={styles.devTools}>
        <h2 className={styles.techs}>Dev Tools</h2>
        <pre>Heroku Postman PGAdmin</pre>
      </div>
    </div>
  );
};
