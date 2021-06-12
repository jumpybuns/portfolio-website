import React from 'react';
import styles from './Name.css';

export default function Name() {
  return (
    <div className={styles.container}>
      <div className={styles.firstName}>
        <h1>Ethan</h1>
      </div>
      <div className={styles.lastName}>
        <h1>Pierce</h1>
      </div>
      <div className={styles.description}>
        <p>Freelance Fullstack Developer based in Portland, OR</p>
      </div>
    </div>
  );
}
