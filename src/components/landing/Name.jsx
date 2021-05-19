import React from 'react';
import styles from './Name.css';

export default function Name() {
  return (
    <div className={styles.container}>
      <h1 className={styles.firstName}>Ethan</h1>
      <h1 className={styles.lastName}>Pierce</h1>
      <p className={styles.description}>
        Freelance Fullstack Developer based in Portland, OR
      </p>
    </div>
  );
}
