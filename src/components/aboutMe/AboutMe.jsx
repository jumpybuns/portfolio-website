import React from 'react';
import styles from './AboutMe.css';
import { Link } from 'react-router-dom';
import Triangle from './Triangle';
import ethan from '../../../public/ethan.jpg';

export const AboutMe = () => {
  return (
    <div id="aboutme" className={styles.container}>
      <h3 className={styles.text}>
        Focused and have a unique perspective with a passion for creativity,
        fixing bugs, problem solving and I love discussing new concepts and
        ideas.
      </h3>
      <div className={styles.profile}>
        <Link
          to={{ pathname: 'https://github.com/jumpybuns' }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <img
            className={styles.image}
            alt="ethan"
            src={ethan}
            style={{ height: '200px', width: '200px' }}
          />
        </Link>
      </div>

      <h3 className={styles.text2}>
        I am a fun, friendly and patient person who can keep cool in stressful
        situations and is able to relate and communicate well with clients and
        coworkers alike.
      </h3>
      <h1 className={styles.aboutMe}>ABOUT ME</h1>
    </div>
  );
};
