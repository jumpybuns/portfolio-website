import React from 'react';
import styles from './Triangle.css';

export default function Triangle() {
  return (
    <g transform="translate(100,1000)">
      <svg height="1000" width="1000">
        <polygon
          className={styles.polygon1}
          points="300,0 500,500 50,70 300,0"
        />
        <polygon
          className={styles.polygon2}
          points="0,300 1000,500 70,50 0,300"
        />
        <polygon
          className={styles.polygon3}
          points="150,150 500,250 35,25 0,150"
        />
      </svg>
    </g>
  );
}
