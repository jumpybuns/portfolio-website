import React from 'react';
import styles from './TechStack.css';
import { Circles } from './Circles';
import ethan from '../../../public/ethan.jpg';

export const TechStack = () => {
  return (
    <>
      <div id="techstack" className={styles.container}>
        <div className={styles.techStack}>
          <h1>TECH STACK</h1>
          <img src={ethan} alt="" />
        </div>
        <div className={styles.techs}>
          <h2>Languages</h2>
          <pre>HTML CSS Javascript</pre>

          <h2>Front End</h2>
          <pre>React Typescript D3 Material-UI</pre>

          <h2>Back End</h2>
          <pre>Node GraphQL postgreSQL Express</pre>

          <h2>Dev Tools</h2>
          <pre>Netlify Heroku Postman PGAdmin</pre>
        </div>
      </div>
    </>
  );
};
