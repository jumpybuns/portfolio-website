import React from 'react';
import styles from './TechStack.css';
import { Circles } from './Circles';

export const TechStack = () => {
  return (
    <>
      <div id="techstack" className={styles.gridContainer}>
        <div className={styles.container}>
          <h1 className={styles.techStack}>TECH STACK</h1>
          <div className={styles.techs}>
            <h2>Languages</h2>
            <pre>Javascript HTML CSS</pre>

            <h2>Front End</h2>
            <pre>React D3 Material-UI Netlify</pre>

            <h2>Back End</h2>
            <pre>Node GraphQL SQL Express</pre>

            <h2>Dev Tools</h2>
            <pre>Heroku Postman PGAdmin</pre>
          </div>
        </div>
      </div>
    </>
  );
};
