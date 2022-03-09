import React from 'react';
import './styles/app.css';
import data from './data.js';
import Filters from './Filters.js';

export default function App() {
  return(
    <div className="inventory-app">
      <Filters />
    </div>
  )
}
