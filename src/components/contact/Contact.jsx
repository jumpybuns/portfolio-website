import React from 'react';
import Header from '../header/Header';
import styles from './Contact.css';
import resume from '../../../public/resume.jpg';

export const Contact = () => {
  return (
    <div>
      <Header />
      <a className={styles.button} href={resume} download="Ethan Pierce Resume">
        Download
      </a>
    </div>
  );
};
