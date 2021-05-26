import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import aurora from './images/aurora2.png';
import karaoke from './images/karaoke2.png';
import chatable from './images/chatable2.png';
import bloom from './images/bloom2.png';
import styles from './Projects.css';

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
    <div id="projects" className={styles.container}>
      <div className={styles.projectText}>
        <h1 className={styles.projectTitles}>{selectedTitle}</h1>
        <div className={styles.links}>
          <Link
            to={{ pathname: 'https://aurora-synth.netlify.app/' }}
            style={{ textDecoration: 'none', color: 'black' }}
            target="_blank"
          >
            <h3
              className={styles.aurora}
              onMouseOver={() => {
                setSelected(images.aurora);
                setSelectedText(text.auroraText);
                setSelectedTitle(title.auroraTitle);
              }}
            >
              Aurora Synth
            </h3>
          </Link>
          <Link
            to={{ pathname: 'https://karaoke-roulette.netlify.app/' }}
            style={{ textDecoration: 'none', color: 'black' }}
            target="_blank"
          >
            <h3
              className={styles.karaoke}
              onMouseOver={() => {
                setSelected(images.karaoke);
                setSelectedText(text.karaokeText);
                setSelectedTitle(title.karaokeTitle);
              }}
            >
              Karaoke Roulette
            </h3>
          </Link>
          <Link
            to={{ pathname: 'https://adoring-wright-0eba98.netlify.app/' }}
            target="_blank"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <h3
              className={styles.chatable}
              onMouseOver={() => {
                setSelected(images.chatable);
                setSelectedText(text.chatableText);
                setSelectedTitle(title.chatableTitle);
              }}
            >
              Chatable
            </h3>
          </Link>
          <Link
            to={{ pathname: 'https://bloom-financial.netlify.app/' }}
            target="_blank"
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <h3
              className={styles.bloom}
              onMouseOver={() => {
                setSelected(images.bloom);
                setSelectedText(text.bloomText);
                setSelectedTitle(title.bloomTitle);
              }}
            >
              Bloom Financial
            </h3>
          </Link>
        </div>
        <p className={styles.description}>{selectedText}</p>
      </div>
      <div className={styles.projectImages}>
        <img src={selected} alt="project" width="100%" />
      </div>
    </div>
  );
};
