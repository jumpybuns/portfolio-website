import React from 'react';
import Header from '../header/Header';
import { HashLink as Link } from 'react-router-hash-link';
import upArrow from '../../../public/upArrow.png';
import styles from './TechStack.css';

export const TechStack = () => {
  return (
    <>
      <div id="top">
        <Header />
        <div id="techstack">
          <div className={styles.gridContainer}>
            <h1 className={styles.techStack}>TECH STACK</h1>
            <div className={styles.languages}>
              <h2>Languages</h2>
              <pre>Javascript HTML CSS Python</pre>
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
        </div>
        <div className={styles.arrow}>
          <Link smooth to={'/techstack#top'}>
            <img src={upArrow} alt="" width="20px" />
          </Link>
        </div>
      </div>
    </>
  );
};
