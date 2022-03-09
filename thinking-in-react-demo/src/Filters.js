import React from 'react';

export default function Filters() {
  return(
    <div className="filters">
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        Only show products in stock
      </label>
    </div>
  )
}
