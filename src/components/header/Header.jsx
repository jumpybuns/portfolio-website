import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Header.css';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.headerList}>
          <li>
            <Link smooth to={'/aboutme#aboutme'}>
              About Me
            </Link>
          </li>
          <li>
            <Link smooth to={'/techstack#techstack'}>
              Tech Stack
            </Link>
          </li>
          <li>
            <Link smooth to={'/projects#projects'}>
              Projects
            </Link>
          </li>
          <li>
            <Link smooth to={'/contact#contact'}>
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
