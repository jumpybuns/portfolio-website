import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import styles from './Header.css';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.headerList}>
          <li>
            <Link
              smooth
              activeStyle={{ fontWeight: 'bold' }}
              to={'/contact#contact'}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              smooth
              activeStyle={{ fontWeight: 'bold' }}
              to={'/techstack#techstack'}
            >
              Tech Stack
            </Link>
          </li>
          <li>
            <Link
              smooth
              activeStyle={{ fontWeight: 'bold' }}
              to={'/projects#projects'}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              smooth
              activeStyle={{ fontWeight: 'bold' }}
              to={'/contact#contact'}
            >
              Contact
            </Link>
          </li>
          <li className={styles.backToTop}>
            <Link smooth to="#top">
              Top of Page
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
