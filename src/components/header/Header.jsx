import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from './Header.css';

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerList}>
            <div className={styles.aboutme}>
              <HashLink smooth to={'/aboutme#aboutme'}>
                About Me
              </HashLink>
            </div>
            <div className={styles.techstack}>
              <HashLink smooth to={'/techstack#techstack'}>
                Tech Stack
              </HashLink>
            </div>
            <div className={styles.projects}>
              <HashLink smooth to={'/projects#projects'}>
                Projects
              </HashLink>
            </div>
            <div className={styles.contact} style={{ textDecoration: 'none' }}>
              <HashLink smooth to={'/contact#contact'}>
                Contact
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
