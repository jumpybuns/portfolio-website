import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './LandingHeader.css';

export const LandingHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.words}>
        <div className={styles.work}>
          <Link smooth to={'/projects#projects'}>
            Work
          </Link>
          <Link smooth to={'/aboutme#aboutme'}>
            Play
          </Link>
          <Link smooth to={'/techstack#techstack'}>
            Tech
          </Link>
          <Link smooth to={'/contact#contact'}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
