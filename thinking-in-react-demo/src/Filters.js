import React from 'react';

export default class Filters extends React.Component {

  handleChange() {
    this.props.toggleShowInStock();
  }

  render() {
    return(
      <div className="filters">
        <input
          className="filters--search"
          type="text"
          name="filterText"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={(e) => this.props.updateFilterText(e)} 
        />
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
