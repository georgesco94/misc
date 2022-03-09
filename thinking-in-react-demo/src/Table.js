import React from 'react';

export default function Table(props) {
  let availableInventory = props.inventory;
  if (props.showInStock) {
    availableInventory = availableInventory.filter(item => item.stocked);
  }
  if (props.filterText) {
    availableInventory = availableInventory.filter(item => item.name.includes(props.filterText))
  }

  function getCategories(inventory) {
    const categories = new Set();
    for (var i = 0; i < inventory.length; i++) {
      categories.add(inventory[i].category)
    }
    return categories;
  }

  const categories = getCategories(availableInventory);
  const stockInventory = [];


  categories.forEach(category => {
    stockInventory.push(
      <tr key={category}>
        <th>{category}</th>
      </tr>
    )
    const categoryItems = availableInventory.filter(item => item.category === category).map(item => {
      return (
        <tr key={item.name}>
          <td className={item.stocked ? 'in-stock' : 'out-of-stock'}>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      )
    });
    stockInventory.push(categoryItems);
  });

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {stockInventory}
        </tbody>
      </table>

    </div>
  )
}
