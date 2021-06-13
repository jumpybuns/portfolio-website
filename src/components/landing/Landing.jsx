import React from 'react';
import styles from './Landing.css';
import { LandingHeader } from './LandingHeader';
import { Circles } from './Circles';
import { Click } from './Click';

export const Landing = () => {
  const handleClick = (e) => {
    const circles = document.querySelectorAll('.circ');
    circles.forEach((circ) => {
      const circBounding = circ.getBoundingClientRect();
      console.log(circBounding.top);
    });
  };
  return (
    <>
      <div id="landing" className={styles.container} onClick={handleClick}>
        <Circles />
        <LandingHeader />
      </div>
    </>
  );
};
