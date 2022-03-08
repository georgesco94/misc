import React from 'react';
import '../styles/Die.css';

export default function Die(props) {
  return(
    <div
      onClick={(e) => props.holdDie(e, props.id)}
      className={"die-face " + (props.isHeld ? "held" : "")}
    >
      <h2 className="die-num">{props.dieNumber}</h2>
    </div>
  );
}
