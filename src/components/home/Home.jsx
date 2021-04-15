import React from 'react';
import styles from './Home.css';
import Name from './Name';
import { Circles } from './Circles';

export default function Home() {
  // const handleOnClick = () => {
  //   window.location.pathname = '/aboutme';
  // };
  return (
    <>
      <div>
        <div className={styles.home}></div>
        <Name />
        <Circles />
      </div>
    </>
  );
}
