import React from 'react';
// import styles from './Line.css';

export default function Line() {
  return (
    <svg height="210" width="500">
      <line x1="0" y1="0" x2="200" y2="200" stroke="black" />
      <line x1="1" y1="5" x2="200" y2="200" stroke="black" />
      <line x1="8" y1="10" x2="200" y2="200" stroke="black" />
    </svg>
  );
}
