import React from 'react';
import styles from './AboutMe.css';
import { Link } from 'react-router-dom';
import Triangle from './Triangle';
import ethan from '../../../public/ethan.jpg';

export const AboutMe = () => {
  return (
    <div id="aboutme" className={styles.container}>
      <div className={styles.aboutMeBox}>
        <h1 className={styles.aboutMe}>ABOUT ME</h1>
      </div>
      <div className={styles.text}>
        <h3>
          Focused with a unique perspective and a passion for creativity, fixing
          bugs, problem solving. I love discussing new concepts and interesting
          ideas.
        </h3>
      </div>
      <div className={styles.profile}>
        <Link
          to={{ pathname: 'https://github.com/jumpybuns' }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <img className={styles.image} alt="ethan" src={ethan} />
        </Link>
      </div>
      <div className={styles.text2}>
        <h3>
          I am a fun, friendly and patient person who can keep cool in stressful
          situations and is able to relate and communicate well with clients and
          coworkers alike.
        </h3>
      </div>
    </div>
  );
};
