import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './LandingHeader.css';

export const LandingHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.words}>
        <div className={styles.work}>
          <Link smooth to={'#projects'}>
            <h1>Work</h1>
          </Link>
          <Link smooth to={'#aboutme'}>
            <h1>About</h1>
          </Link>
          <Link smooth to={'#techstack'}>
            <h1>Tech</h1>
          </Link>
          <Link smooth to={'#contact'}>
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
