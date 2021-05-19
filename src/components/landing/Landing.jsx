import React from 'react';
import styles from './Landing.css';
import Name from './Name';
import { LandingHeader } from './LandingHeader';
import { Circles } from './Circles';

export const Landing = () => {
  const clicked = (e) => {};

  const handleOnClick = () => {
    window.location.pathname = '/';
  };
  return (
    <>
      <div id="landing">
        <div className={styles.container} onClick={clicked}>
          <div>
            <div className={styles.landing}></div>
            <LandingHeader />
            <Name />
          </div>
        </div>
      </div>
    </>
  );
};
