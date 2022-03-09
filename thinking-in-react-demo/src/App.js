import React from 'react';
import './styles/app.css';
import data from './data.js';
import Filters from './Filters.js';
import Table from './Table.js';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: [],
      showInStock: false,
    }
  }

  componentDidMount() {
    this.setState({inventory: data});
  }

  toggleShowInStock() {
    this.setState(prevState => {
      return {showInStock: !prevState.showInStock}
    });
  }

  render() {
    return(
      <div className="inventory-app">
        <Filters showInStock={this.state.showInStock} toggleShowInStock={() => this.toggleShowInStock()} />
        <Table inventory={this.state.inventory} showInStock={this.state.showInStock}/>
      </div>
    )
  }
}
