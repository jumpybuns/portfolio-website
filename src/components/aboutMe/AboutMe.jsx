import React from 'react';
import styles from './AboutMe.css';
import ethan from '../../../public/ethan.jpg';

export const AboutMe = () => {
  return (
    <div id="aboutme" className={styles.container}>
      <img
        className={styles.image}
        alt="ethan"
        src={ethan}
        style={{ width: '200px' }}
      />
      <h3 className={styles.text}>
        I am focused and have a unique perspective with a passion for
        creativity, fixing bugs, problem solving and I love discussing new
        concepts and ideas. I am a fun, friendly and patient person who can keep
        cool in stressful situations and is able to relate and communicate well
        with clients and coworkers alike.
      </h3>
      <h1 className={styles.aboutMe}>ABOUT ME</h1>
    </div>
  );
};
