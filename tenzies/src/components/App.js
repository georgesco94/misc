import React from 'react';
import '../styles/App.css';
import Die from './Die.js';

export default function App() {
  return(
    <main className="main">
      <div className="dice-container">
        <Die dieNumber={1} />
        <Die dieNumber={1} />
        <Die dieNumber={5} />
        <Die dieNumber={2} />
        <Die dieNumber={1} />
        <Die dieNumber={4} />
        <Die dieNumber={2} />
        <Die dieNumber={3} />
        <Die dieNumber={4} />
        <Die dieNumber={6} />
      </div>
    </main>
  );
}
