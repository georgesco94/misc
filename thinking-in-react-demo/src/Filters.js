import React from 'react';

export default class Filters extends React.Component {

  handleChange(e) {
    this.props.toggleShowInStock();
  }

  render() {
    return(
      <div className="filters">
        <input className="filters--search" type="text" placeholder="Search..." />
        <label>
          <input
            type="checkbox"
            name="showInStock"
            checked={this.props.showInStock}
            onChange={(e) => this.handleChange(e)}
          />
          Only show products in stock
        </label>
      </div>
    )

  }
}
