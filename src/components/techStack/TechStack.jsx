import React from 'react';
import styles from './TechStack.css';
import { Circles } from './Circles';

export const TechStack = () => {
  return (
    <div id="techstack" className={styles.gridContainer}>
      <h1 className={styles.techStack}>TECH STACK</h1>
      <div className={styles.languages}>
        <h2 className={styles.techs}>Languages</h2>
        <pre>Javascript HTML CSS Python</pre>

        <h2 className={styles.techs}>Front End</h2>
        <pre>React D3 Material-UI Netlify</pre>

        <h2 className={styles.techs}>Back End</h2>
        <pre>Node.JS PostgreSQL Express BCrypt</pre>

        <h2 className={styles.techs}>Dev Tools</h2>
        <pre>Heroku Postman PGAdmin</pre>
      </div>
      <Circles />
    </div>
  );
};
