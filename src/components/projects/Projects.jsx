import React from 'react';
import styles from './Projects.css';
import aurora from '../../../public/aurora.jpg';
import karaoke from '../../../public/karaoke.jpg';
import chatable from '../../../public/chatable.jpg';
import bloom from '../../../public/bloom.jpg';
import Header from '../header/Header';

export const Projects = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.column1}>
          <img src={aurora} alt="aurora synth" width="200"></img>
          <div className={styles.column2}>
            <img src={karaoke} alt="karaoke roulette" width="200"></img>
          </div>
          <div className={styles.column3}>
            <img src={chatable} alt="chatable" width="200"></img>
          </div>
          <div className={styles.column4}>
            <img src={bloom} alt="bloom" width="200"></img>
          </div>
        </div>
      </div>
    </>
  );
};
