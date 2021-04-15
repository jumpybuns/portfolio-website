import React from 'react';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.homeNav}>Home</h1>
      <h1 className={styles.abtMeNav}>About Me</h1>
      <h1 className={styles.tsNav}>Tech Stack</h1>
      <h1 className={styles.projNav}>Projects</h1>
      <h1 className={styles.contNav}>Contact</h1>
    </div>
  );
}
