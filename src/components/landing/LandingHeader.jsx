import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './LandingHeader.css';

export const LandingHeader = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link smooth to={'#projects'}>
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link smooth to={'#aboutme'}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link smooth to={'#techstack'}>
            <a>Tech</a>
          </Link>
        </li>
        <li>
          <Link smooth to={'#contact'}>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
