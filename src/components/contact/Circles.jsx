import React, { useState, useCallback } from 'react';
import styles from './Circles.css';

const width = window.innerWidth;
const height = window.innerHeight;
const circleRadius = 300;
const intialMousePosition = { x: 90, y: 90 };
const circleRadius2 = 150;

export const Circles = () => {
  const [mousePosition, setMousePosition] = useState(intialMousePosition);
  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition]
  );

  return (
    <div id="container" className={styles.container}>
      <svg
        className={styles.mydivheader}
        width={width}
        height={height}
        onMouseDown={handleMouseMove}
      >
        <circle
          className="circ"
          cx={mousePosition.x}
          cy={mousePosition.y}
          r={circleRadius + circleRadius2}
        />
        <circle
          className="circ"
          cx={mousePosition.x / 4}
          cy={mousePosition.y / 2}
          r={circleRadius}
        />
        <circle
          className="circ"
          cx={mousePosition.x / 2}
          cy={mousePosition.y / 4}
          r={circleRadius}
        />
        <circle
          className="circ"
          cx={mousePosition.x * 2}
          cy={mousePosition.y * 2}
          r={circleRadius - circleRadius2}
        />
        <circle
          className="circ"
          cx={mousePosition.x * 0.4}
          cy={mousePosition.y * 0.4}
          r={circleRadius - circleRadius2}
        />
        <circle
          className="circ"
          className={styles.lastCircle}
          cx={mousePosition.x * 0.6}
          cy={mousePosition.y * 0.6}
          r={circleRadius - circleRadius2}
        />
      </svg>
    </div>
  );
};
