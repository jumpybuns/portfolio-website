import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to='/aboutme'>
      <h1 className={styles.abtMeNav}>About Me</h1></Link>
      <Link to='/techstack'>
      <h1 className={styles.tsNav}>Tech Stack</h1></Link>
      <h1 className={styles.projNav}>Projects</h1>
      <h1 className={styles.contNav}>Contact</h1>
    </div>
  );
}
