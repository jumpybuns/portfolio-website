import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './LandingHeader.css';

export const LandingHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.words}>
        <div className={styles.work}>
          <Link smooth to={'/#projects'}>
            Work
          </Link>
          <Link smooth to={'/#aboutme'}>
            Play
          </Link>
          <Link smooth to={'/#techstack'}>
            Tech
          </Link>
          <Link smooth to={'/#contact'}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
