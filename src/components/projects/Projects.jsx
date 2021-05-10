import React from 'react';
import styles from './Projects.css';
import { Link } from 'react-router-dom';
import aurora from '../../../public/aurora.jpg';
import karaoke from '../../../public/karaoke.jpg';
import chatable from '../../../public/chatable.jpg';
import bloom from '../../../public/bloom.jpg';
import Header from '../header/Header';

export const Projects = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.contact}>Contact</h1>
      <a className={styles.button} download="Ethan Pierce Resume">
        Aurora Synth
      </a>
      <Link
        to={{ pathname: 'https://github.com/jumpybuns' }}
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <h3 className={styles.github}>Karaoke Roulette</h3>
      </Link>
      <Link
        to={{ pathname: 'https://mail.google.com/' }}
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <h3 className={styles.email}>Chatable</h3>
      </Link>
      <Link
        to={{ pathname: 'https://www.linkedin.com/in/ethanpiercepresents' }}
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <h3 className={styles.linkedin}>Bloom Financial</h3>
      </Link>
    </div>
  );
};
