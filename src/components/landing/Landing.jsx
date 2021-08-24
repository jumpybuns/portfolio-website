import React from 'react';
import styles from './Landing.css';
import { Circles } from './Circles';
import { HashLink as Link } from 'react-router-hash-link';

export const Landing = () => {
  const handleClick = (e) => {
    const circles = document.querySelectorAll('.circ');
    circles.forEach((circ) => {
      const circBounding = circ.getBoundingClientRect();
      console.log(circBounding.top);
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
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
      <Circles />
      <div
        id="landing"
        className={styles.landingContainer}
        onClick={handleClick}
      >
        <div className={styles.nameBox}>
          <div className={styles.name}>
            E<div className={styles.hidden}>T</div>
            <div className={styles.hidden}>H</div>
            <div className={styles.hidden}>A</div>
            <div className={styles.hidden}>N</div>
          </div>
          <div className={styles.name}>
            P<div className={styles.hidden}>I</div>
            <div className={styles.hidden}>E</div>
            <div className={styles.hidden}>R</div>
            <div className={styles.hidden}>C</div>
            <div className={styles.hidden}>E</div>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>Fullstack Developer based in Portland, OR</p>
      </div>
    </div>
  );
};
