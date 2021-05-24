import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Contact.css';
import resume from '../../../public/resume.jpg';
import upArrow from '../../../public/upArrow.png';
import { Circles } from './Circles';

export const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.links}>
        <Link
          to={{ pathname: 'https://github.com/jumpybuns' }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          GitHub
        </Link>
        <Link
          to={{ pathname: 'https://mail.google.com/' }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          Email
        </Link>
        <Link
          to={{
            pathname: 'https://www.linkedin.com/in/ethanpiercepresents',
          }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          LinkedIn
        </Link>
      </div>
      <a
        className={styles.myButton}
        href={resume}
        download="Ethan Pierce Resume"
      >
        Download Resume
      </a>
      <h1 className={styles.contact}>Contact Me</h1>
      <Circles />
      <HashLink smooth to={'/contact#top'}>
        <img className={styles.arrow} src={upArrow} alt="" width="20px" />
      </HashLink>
    </div>
  );
};
