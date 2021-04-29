import React from 'react';
import styles from './Projects.css';
import aurora from '../../../public/aurora.jpg';
import karaoke from '../../../public/karaoke.jpg';
import chatable from '../../../public/chatable.jpg';
import bloom from '../../../public/bloom.jpg';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <img src={aurora} alt="aurora synth" height="200"></img>
      <img src={karaoke} alt=""></img>
      <img src={chatable} alt=""></img>
      <img src={bloom} alt=""></img>
    </div>
  );
};
