import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './Circles.css';

const width = 1920;
const height = 1080;
const circleRadius = 200;
const intialMousePosition = { x: 0, y: 0 };
const circleRadius2 = 100;

export const Circles = () => {
  const [mousePosition, setMousePosition] = useState(intialMousePosition);
  const [freezePosition, setFreezePosition] = useState(true);
  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition]
  );

  const freezeMouse = () => {
    handleMouseMove({
      cx: 100,
      cy: 100,
      r: 100,
    });
  };
  const handleOnClick = (event) => {
    event.preventDefault();
    freezeMouse();
  };

  return (
    <>
      <div onMouseMove={handleMouseMove} className={styles.container}>
        <svg width={width} height={height} onClick={handleOnClick}>
          <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r={circleRadius + circleRadius2}
          />
          <circle
            cx={mousePosition.x / 4}
            cy={mousePosition.y / 2}
            r={circleRadius}
          />
          <circle
            cx={mousePosition.x / 2}
            cy={mousePosition.y / 4}
            r={circleRadius}
          />
          <circle
            cx={mousePosition.x * 2}
            cy={mousePosition.y * 2}
            r={circleRadius - circleRadius2}
          />
          <circle
            cx={mousePosition.x * 0.1}
            cy={mousePosition.y * 0.1}
            r={circleRadius - circleRadius2}
          />

          <circle
            cx={mousePosition.x * 0.4}
            cy={mousePosition.y * 0.4}
            r={circleRadius - circleRadius2}
          />
          <circle
            className={styles.lastCircle}
            cx={mousePosition.x * 0.6}
            cy={mousePosition.y * 0.6}
            r={circleRadius - circleRadius2}
          />
        </svg>
      </div>
    </>
  );
};
