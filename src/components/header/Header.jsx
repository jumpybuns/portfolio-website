import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Header.css';

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerList}>
            <div className={styles.aboutme}>
              <Link smooth to={'/aboutme#aboutme'}>
                About Me
              </Link>
            </div>
            <div className={styles.techstack}>
              <Link smooth to={'/techstack#techstack'}>
                Tech Stack
              </Link>
            </div>
            <div className={styles.projects}>
              <Link smooth to={'/projects#projects'}>
                Projects
              </Link>
            </div>
            <div className={styles.contact} style={{ textDecoration: 'none' }}>
              <Link smooth to={'/contact#contact'}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
