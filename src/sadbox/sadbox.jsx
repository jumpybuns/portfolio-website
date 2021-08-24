import React, { useState } from 'react';
import { TechStack } from '../components/techStack/TechStack';
import styles from './sadbox.css';
import useFade from './useFade';

const sadbox = () => {
  const [isShown, setIsShown] = useState(false);
  const [isVisible, setVisible, fadeProps] = useFade(isVisible);

  const xAxis = window.innerWidth;
  const yAxis = window.innerHeight;
  return (
    <div>
      <h1
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        ABOUT
      </h1>

      {/* <button onMouseEnter={() => setVisible(!isVisible)}>
        Toggle visibility
      </button>
      {isVisible && <h2 {...fadeProps}>Now you see me...</h2>} */}

      <svg
        className={styles.shadow}
        width={xAxis}
        height={yAxis}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <rect
          x="200"
          y="30"
          width="850"
          height="500"
          rx="15"
          fill="transparent"
          stroke="black"
          strokeWidth="5"
        />
      </svg>
      <div className={styles.sadbox}>
        {isShown && (
          <TechStack
            onEnter={(node) => animateOnEnter(node)}
            onExit={(node) => animateOnExit(node)}
            timeout={1000}
          />
        )}
      </div>
    </div>
  );
};

export default sadbox;
