import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Line from './Line';
import styles from './Contact.css';
import resume from '../../../public/resume.jpg';

export const Contact = () => {
  return (
    <>
      <Header />
      <div id="contact">
        <h1 className={styles.contact}>Contact</h1>
        <a
          className={styles.button}
          href={resume}
          download="Ethan Pierce Resume"
        >
          Download Resume
        </a>
        <Link
          to={{ pathname: 'https://github.com/jumpybuns' }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <h3 className={styles.github}>GitHub</h3>
        </Link>
        <Link
          to={{ pathname: 'https://mail.google.com/' }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <h3 className={styles.email}>Email</h3>
        </Link>
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/ethanpiercepresents' }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <h3 className={styles.linkedin}>LinkedIn</h3>
        </Link>
        <Line />
      </div>
    </>
  );
};
