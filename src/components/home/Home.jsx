import React from 'react';
import styles from './Home.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.firstName}>Ethan</h1>
      <h1 className={styles.lastName}>Pierce</h1>
    </div>
  );
}
