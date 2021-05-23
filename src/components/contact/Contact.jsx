import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Contact.css';
import resume from '../../../public/resume.jpg';
import upArrow from '../../../public/upArrow.png';

export const Contact = () => {
  return (
    <>
      <div id="top">
        <div className={styles.container1}>
          <h1 className={styles.contact}>Contact</h1>
          <div id="contact">
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
              to={{
                pathname: 'https://www.linkedin.com/in/ethanpiercepresents',
              }}
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <h3 className={styles.linkedin}>LinkedIn</h3>
            </Link>
          </div>
          <div className={styles.arrow}>
            <HashLink smooth to={'/contact#top'}>
              <img src={upArrow} alt="" width="20px" />
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
};
