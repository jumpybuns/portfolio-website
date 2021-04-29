import React from 'react';
import Header from '../header/Header';
import styles from './TechStack.css';

export const TechStack = () => {
  return (
    <>
      <Header />
      <div className={styles.gridContainer}>
        <h1 className={styles.techStack}>TECH STACK</h1>
        <div className={styles.languages}>
          <h2>Languages</h2>
          <pre>Javascript HTML CSS</pre>
        </div>
        <div className={styles.frontEnd}>
          <h2>Front End</h2>
          <pre>React D3 Material-UI Netlify</pre>
        </div>
        <div className={styles.backEnd}>
          <h2>Back End</h2>
          <pre>Node.JS PostgreSQL Express BCrypt</pre>
        </div>
        <div className={styles.devTools}>
          <h2>Dev Tools</h2>
          <pre>Heroku Postman PGAdmin</pre>
        </div>
      </div>
    </>
  );
};
