import React from 'react';
import styles from './LandingHeader.css';

export const LandingHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.words}>
        <h2>Work</h2>
        <h2>Play</h2>
        <h2>Tech</h2>
        <h2>Contact</h2>
      </div>
    </div>
  );
};
