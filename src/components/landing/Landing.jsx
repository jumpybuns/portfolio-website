import React from 'react';
import styles from './Landing.css';
import Name from './Name';
import { LandingHeader } from './LandingHeader';
import { Circles } from './Circles';

export const Landing = () => {
  const handleClick = (e) => {
    const circles = document.querySelectorAll('.circ');
    circles.forEach((circ) => {
      const circBounding = circ.getBoundingClientRect();
      console.log(circBounding.top);
    });
  };
  return (
    <div id="landing" className={styles.container} onClick={handleClick}>
      <Circles />
      <Name />
      <p className={styles.click}>click</p>
      <p className={styles.click2}>around</p>
      <LandingHeader />
    </div>
  );
};
