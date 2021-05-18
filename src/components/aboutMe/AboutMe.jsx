import React from 'react';
import styles from './AboutMe.css';
import Header from '../header/Header';
import Triangle from './Triangle';
import ethan from '../../../public/ethan.jpg';

export const AboutMe = () => {
  return (
    <>
      <Header />
      <div id="aboutme">
        <div className={styles.container1}>
          <div className={styles.row1}>
            <img
              className={styles.image}
              alt="ethan"
              src={ethan}
              height="300px"
              width="300px"
            />{' '}
          </div>
        </div>
        <div className={styles.container2}>
          <h3 className={styles.aboutMeBox}>
            I am focused and have a unique perspective with a passion for
            creativity, fixing bugs, problem solving and I love discussing new
            concepts and ideas. I am a fun, friendly and patient person who can
            keep cool in stressful situations and is able to relate and
            communicate well with clients and coworkers alike.
          </h3>
          <div className={styles.aboutMeBox2}></div>
        </div>
        <div className={styles.container3}>
          <h1 className={styles.aboutMe}>ABOUT ME</h1>
        </div>
      </div>
    </>
  );
};
