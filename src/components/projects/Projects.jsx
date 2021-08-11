import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import aurora from './images/auroraWide.jpg';
import karaoke from './images/karaokeWide.jpg';
import chatable from './images/chatableWide.jpg';
import bloom from './images/bloomWide.jpg';
import styles from './Projects.css';

const auroraTitle = 'Aurora Synth';
const karaokeTitle = 'Karaoke Roulette';
const chatableTitle = 'Chatable';
const bloomTitle = 'Bloom Financial';

const auroraText =
  'Beautiful interactive web browser synth built with vanilla JavaScript and Web Audio API. I implimented the series of audio nodes and created the different wave shapes and filters as well as used ChartJS to create the dynamic graph';

const karaokeText =
  'Social app utilizing YouTube API to create randomized karaoke videos. We used Javascript, React, SQL, Heroku, Netlify, CSS I created the API call, implemented the authorization, ran tests, and created the CRUD routes.';

const chatableText =
  'Instantaneous live chat app and chat rooms created with Socket.IO and Material-UI. I designed and created the messaging emits and broadcasts. I also wrote the User and Auth models/routes. ';

const bloomText =
  'Stock Trading learning tool using NewsAPI, Live Stock Ticker, Finance Widget and seemlessly integrating Alpaca Finance with your own portfolio. I setup the Oauth, created the landing page and built the entirety of the Alpaca integration.';

const images = { aurora, karaoke, chatable, bloom };

export const Projects = () => {
  const [selected, setSelected] = useState(images.aurora);
  const [selectedText, setSelectedText] = useState(auroraText);
  const [selectedTitle, setSelectedTitle] = useState(auroraTitle);

  return (
    <div id="projects" className={styles.container}>
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
              setSelectedText(auroraText);
              setSelectedTitle(auroraTitle);
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
              setSelectedText(karaokeText);
              setSelectedTitle(karaokeTitle);
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
              setSelectedText(chatableText);
              setSelectedTitle(chatableTitle);
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
              setSelectedText(bloomText);
              setSelectedTitle(bloomTitle);
            }}
          >
            Bloom Financial
          </h3>
        </Link>
      </div>
      <div className={styles.projectText}>
        <h1 className={styles.work}>WORK</h1>
        <img src={selected} alt="project" width="200px" />
      </div>
      <div className={styles.description}>
        <p>{selectedText}</p>
      </div>
    </div>
  );
};
