import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Contact.css';
import resume from '../../../public/resume.pdf';
import upArrow from '../../../public/upArrow.png';
import { Circles } from './Circles';
import { style } from 'd3-selection';

export const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <Circles />
      <div className={style.contactMe}>
        <h1 className={styles.contact}>Contact Me</h1>
      </div>
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
      <div className={style.downloadButton}>
        <a
          className={styles.myButton}
          href={resume}
          download="Ethan Pierce Resume"
        >
          Download Resume
        </a>
      </div>
      <div className={style.topArrow}>
        <HashLink className={styles.arrow} smooth to={'#top'}>
          <img src={upArrow} alt="" width="10%" />
          <img src={upArrow} alt="" width="10%" />
          <img src={upArrow} alt="" width="10%" />
          <img src={upArrow} alt="" width="10%" />
          <img src={upArrow} alt="" width="10%" />
          <img src={upArrow} alt="" width="10%" />
          <img src={upArrow} alt="" width="10%" />
          <img src={upArrow} alt="" width="10%" />
          <img src={upArrow} alt="" width="10%" />
          <img src={upArrow} alt="" width="10%" />
        </HashLink>
      </div>
    </div>
  );
};
