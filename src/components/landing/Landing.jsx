import React from 'react';
import styles from './Landing.css';
import Name from './Name';
import { Circles } from './Circles';

export const Landing = () => {
  const handleOnClick = () => {
    window.location.pathname = '/home';
  };
  return (
    <>
      <div id="landing">
        <div onClick={handleOnClick}>
          <div className={styles.landing}></div>
          <Name />
          <Circles />
        </div>
      </div>
    </>
  );
};
