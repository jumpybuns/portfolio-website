import React from 'react';
import styles from './AboutMe.css';
import Header from '../header/Header';

export default function AboutMe() {
  return (
    <>
      <Header />
      <div className={styles.aboutMe}>
        <h2>
          I am focused and have a unique perspective with a passion for
          creativity, fixing bugs, problem solving and I love discussing new
          concepts and ideas. I am a fun, friendly and patient person who can
          keep cool in stressful situations and is able to relate and
          communicate well with clients and coworkers alike.
        </h2>
      </div>
    </>
  );
}
