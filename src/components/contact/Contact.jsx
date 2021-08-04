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
      <div className={styles.contactMe}>
        <h1 className={styles.contact}>Contact Me</h1>
      </div>
      <div className={styles.stanger}>
        <h2>Say Hi!</h2>
      </div>
      <ul className={styles.links}>
        <li>
          <Link
            to={{ pathname: 'https://mail.google.com/' }}
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            EthanPiercePresents@gmail.com
          </Link>
        </li>
        <li>
          <Link
            to={{ pathname: 'https://github.com/jumpybuns' }}
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: 'https://www.linkedin.com/in/ethanpiercepresents',
            }}
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            LinkedIn
          </Link>
        </li>
      </ul>
      <div className={styles.downloadButton}>
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
          <img src={upArrow} alt="" width="10px" />
          <img src={upArrow} alt="" width="10px" />
          <img src={upArrow} alt="" width="10px" />
          <img src={upArrow} alt="" width="10px" />
          <img src={upArrow} alt="" width="10px" />
          <img src={upArrow} alt="" width="10px" />
          <img src={upArrow} alt="" width="10px" />
          <img src={upArrow} alt="" width="10px" />
        </HashLink>
      </div>
    </div>
  );
};
