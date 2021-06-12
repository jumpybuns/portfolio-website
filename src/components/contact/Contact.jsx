import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Contact.css';
import resume from '../../../public/resume.pdf';
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
          <p> GitHub</p>
        </Link>
        <Link
          to={{ pathname: 'https://mail.google.com/' }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <p>Email</p>
        </Link>
        <Link
          to={{
            pathname: 'https://www.linkedin.com/in/ethanpiercepresents',
          }}
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <p>LinkedIn</p>
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
      <HashLink className={styles.arrow} smooth to={'#top'}>
        <img src={upArrow} alt="" width="20px" />
      </HashLink>
    </div>
  );
};
