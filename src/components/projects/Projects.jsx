import React, { useState } from 'react';
import aurora from './images/aurora.jpg';
import karaoke from './images/karaoke.jpg';
import chatable from './images/chatable.jpg';
import bloom from './images/bloom.jpg';
import styles from './Projects.css';
import Header from '../header/Header';

const images = { aurora, karaoke, chatable, bloom };

const auroraText =
  'Beautiful interactive web browser synth built with vanilla JavaScript and Web Audio API. I implimented the series of audio nodes and created the different wave shapes and filters as well as used ChartJS to create the dynamic graph';
const karaokeText =
  'Social app utilizing YouTube API to create randomized karaoke videos. We used Javascript, React, SQL, Heroku, Netlify, CSS I created the API call, implemented the authorization, ran tests, and created the CRUD routes.';
const chatableText =
  'Instantaneous live chat app and chat rooms created with Socket.IO and Material-UI. I designed and created the messaging emits and broadcasts. I also wrote the User and Auth models/routes. ';
const bloomText =
  'Stock Trading learning tool using NewsAPI, Live Stock Ticker, Finance Widget and seemlessly integrating Alpaca Finance with your own portfolio. I setup the Oauth, created the landing page and built the entirety of the Alpaca integration.';
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
      <div className={styles.container} id="projects">
        <div className={styles.box1}>
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
