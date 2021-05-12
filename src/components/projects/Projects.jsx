import React, { useState } from 'react';
import aurora from './images/aurora.jpg';
import karaoke from './images/karaoke.jpg';
import chatable from './images/chatable.jpg';
import bloom from './images/bloom.jpg';
import styles from './Projects.css';
import Header from '../header/Header';

const images = { aurora, karaoke, chatable, bloom };

export const Projects = () => {
  const [selected, setSelected] = useState(images.aurora);

  return (
    <div>
      <Header />
      <img src={selected} alt="project" width="200px" />
      <h3 className={styles.aurora} onClick={() => setSelected(images.aurora)}>
        Aurora Synth
      </h3>
      <h3
        className={styles.karaoke}
        onClick={() => setSelected(images.karaoke)}
      >
        Karaoke Roulette
      </h3>
      <h3
        className={styles.chatable}
        onClick={() => setSelected(images.chatable)}
      >
        Chatable
      </h3>
      <h3 className={styles.bloom} onClick={() => setSelected(images.bloom)}>
        Bloom Financial
      </h3>
    </div>
  );
};
