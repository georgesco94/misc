import React from 'react';
import '../styles/App.css';
import Die from './Die.js';
import {nanoid} from 'nanoid';
import Confetti from 'react-confetti';

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const gameIsWon = dice.every(die => die.isHeld && die.value === dice[0].value);
    gameIsWon && console.log('YOU WON');
    setTenzies(gameIsWon);
  },[dice]);

  function rollSingleDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const arrOfNums = [];
    for (var i = 0; i < 10; i++) {
      arrOfNums.push(
        rollSingleDie()
      );
    }
    return arrOfNums;
  }

  function rollDice() {
    setDice(prevDice => {
      return prevDice.map(die => die.isHeld ? die : rollSingleDie())
    });
  }

  function holdDice(e, id) {
    setDice(prevDice => {
      return prevDice.map(die =>(
        die.id === id ? {...die, isHeld: !die.isHeld} : die
      ))
    });
  }

  const dieElements = dice.map((die, idx) => {
    return <Die
      key={die.id}
      id={die.id}
      dieNumber={die.value}
      isHeld={die.isHeld}
      holdDie={holdDice}
    />;
  });


  return(
    <main className="main">
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {dieElements}
      </div>
      <button className="die-roll-button" onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
    </main>
  );
}
