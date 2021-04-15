import React from 'react';
import styles from './AboutMe.css';
import Header from '../header/Header';
import Triangle from './Triangle';
import ethan from '../../../public/ethan.jpg';

export default function AboutMe() {
  return (
    <>
      <Header />
      <Triangle />
      <div className={styles.background}>
        <h2 className={styles.aboutMeBox}>
          and have a unique perspective with a passion for creativity, fixing
          bugs, problem solving and I love discussing new concepts and ideas. I
          am a fun, friendly and patient person who can keep cool in stressful
          situations and is able to relate and communicate well with clients and
          coworkers alike.
        </h2>
        <h2 className={styles.aboutMeBox2}>
          I am focused and have a unique perspective with a passion for
          creativity, fixing bugs, problem solving and I love discussing new
          concepts and ideas. I am a fun, friendly and patient person who can
          keep cool in stressful situations and is able to relate and
          communicate well with clients and coworkers alike.
        </h2>

        <img
          className={styles.image}
          alt="ethan"
          src={ethan}
          height="200px"
          width="200px"
        />
      </div>
    </>
  );
}
