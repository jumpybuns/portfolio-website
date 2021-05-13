import React, { useState } from 'react';
import aurora from './images/aurora.jpg';
import karaoke from './images/karaoke.jpg';
import chatable from './images/chatable.jpg';
import bloom from './images/bloom.jpg';
import styles from './Projects.css';
import Header from '../header/Header';

const images = { aurora, karaoke, chatable, bloom };

const auroraText = 'hello there';
const karaokeText = 'karaoke jams';
const chatableText = 'chatable jams';
const bloomText = 'bloom jams';
const text = { auroraText, karaokeText, chatableText, bloomText };

const auroraTitle = 'Aurora Synth';
const karaokeTitle = 'Karaoke Roulette';
const chatableTitle = 'Chatable';
const bloomTitle = 'Bloom Financial';
const title = { auroraTitle, karaokeTitle, chatableTitle, bloomTitle };

export const Projects = () => {
  const [selected, setSelected] = useState(images.aurora);
  const [selectedText, setSelectedText] = useState(text.auroraText);
  const [selectedTitle, setSelectedTitle] = useState(title.auroraTitle);

  return (
    <>
      <Header />
      <div id="projects">
        <div className={styles.container}>
          <h1 className={styles.projectTitles}>{selectedTitle}</h1>
          <img className={styles.projectImages} src={selected} alt="project" />
          <p className={styles.projectText}>{selectedText}</p>
        </div>
        <h3
          className={styles.aurora}
          onClick={() => {
            setSelected(images.aurora);
            setSelectedText(text.auroraText);
            setSelectedTitle(title.auroraTitle);
          }}
        >
          Aurora Synth
        </h3>
        <h3
          className={styles.karaoke}
          onClick={() => {
            setSelected(images.karaoke);
            setSelectedText(text.karaokeText);
            setSelectedTitle(title.karaokeTitle);
          }}
        >
          Karaoke Roulette
        </h3>
        <h3
          className={styles.chatable}
          onClick={() => {
            setSelected(images.chatable);
            setSelectedText(text.chatableText);
            setSelectedTitle(title.chatableTitle);
          }}
        >
          Chatable
        </h3>
        <h3
          className={styles.bloom}
          onClick={() => {
            setSelected(images.bloom);
            setSelectedText(text.bloomText);
            setSelectedTitle(title.bloomTitle);
          }}
        >
          Bloom Financial
        </h3>
      </div>
    </>
  );
};
