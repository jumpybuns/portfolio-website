import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './LandingHeader.css';

export const LandingHeader = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link smooth to={'#aboutme'}>
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link smooth to={'#projects'}>
            <p>Work</p>
          </Link>
        </li>
        <li>
          <Link smooth to={'#techstack'}>
            <p>Tech</p>
          </Link>
        </li>
        <li>
          <Link smooth to={'#contact'}>
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
