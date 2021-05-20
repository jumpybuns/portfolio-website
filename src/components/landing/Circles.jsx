import React, { useState, useCallback } from 'react';
import styles from './Circles.css';

const width = window.innerWidth;
const height = window.innerHeight;
const circleRadius = 200;
const intialMousePosition = { x: 0, y: 0 };
const circleRadius2 = 100;

export const Circles = () => {
  const [mousePosition, setMousePosition] = useState(intialMousePosition);
  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition]
  );

  dragElement(document.getElementById('.container'));

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(elmnt.id + 'header')) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  return (
    <div id="container" className={styles.container}>
      <svg
        className={styles.mydivheader}
        width={width}
        height={height}
        onMouseMove={handleMouseMove}
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
          cx={mousePosition.x * 0.1}
          cy={mousePosition.y * 0.1}
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
