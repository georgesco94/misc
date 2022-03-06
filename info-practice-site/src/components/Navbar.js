import React from 'react';
import reactLogo from '../logo1922.png';

function Navbar() {
  return(
    <nav className="navbar">
      <div className="navbar-logo-text">
        <img src={reactLogo} width="50px"/>
        <span className="react-color">ReactFacts</span>
      </div>
      <div>React Course - Project 1</div>
    </nav>
  );
}

export default Navbar;
