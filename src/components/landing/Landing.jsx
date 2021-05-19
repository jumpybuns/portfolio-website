import React from 'react';
import styles from './Landing.css';
import Name from './Name';
import { LandingHeader } from './LandingHeader';
import { Circles } from './Circles';

export const Landing = () => {
  const handleOnClick = () => {
    window.location.pathname = '/home';
  };
  return (
    <>
      <div id="landing">
        <div className={styles.container}>
          <div onClick={handleOnClick}>
            <div className={styles.landing}></div>
            <LandingHeader />
            <Name />
            <Circles />
          </div>
        </div>
      </div>
    </>
  );
};
