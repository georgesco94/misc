import React from 'react';
import '../styles/App.css';
import Die from './Die.js';


export default function App() {
  function allNewDice() {
    const arrOfNums = [];
    for (var i = 0; i < 10; i++) {
      arrOfNums.push(Math.floor(Math.random() * 6) + 1);
    }
    return arrOfNums;
  }

  const [dice, setDice] = React.useState(allNewDice());

  const dieElements = dice.map((die, idx) => {
    return <Die dieNumber={die}/>;
  });

  function handleRoll() {
    setDice(allNewDice());
  }

  return(
    <main className="main">
      <div className="dice-container">
        {dieElements}
      </div>
      <button className="die-roll-button" onClick={handleRoll}>Roll</button>
    </main>
  );
}
