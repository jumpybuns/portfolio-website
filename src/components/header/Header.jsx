import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Header.css';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.headerList}>
          <li className={styles.aboutme}>
            <Link smooth to={'/aboutme#aboutme'}>
              About Me
            </Link>
          </li>
          <li className={styles.techstack}>
            <Link smooth to={'/techstack#techstack'}>
              Tech Stack
            </Link>
          </li>
          <li className={styles.projects}>
            <Link smooth to={'/projects#projects'}>
              Projects
            </Link>
          </li>
          <li className={styles.contact} style={{ textDecoration: 'none' }}>
            <Link smooth to={'/contact#contact'}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
