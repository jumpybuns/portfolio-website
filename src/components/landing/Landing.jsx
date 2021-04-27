import React from 'react';
import styles from './Landing.css';
import Name from './Name';
import { Circles } from './Circles';

export default function Landing() {
  const handleOnClick = () => {
    window.location.pathname = '/aboutme';
  };
  return (
    <>
      <div onClick={handleOnClick}>
        <div className={styles.landing}></div>
        <Name />
        <Circles />
      </div>
    </>
  );
}