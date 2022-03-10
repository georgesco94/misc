import React from 'react';
import './styles/app.css';
import data from './data.js';
import Filters from './Filters.js';
import Table from './Table.js';


// export default function App() {
//   console.log('functional');
//   const [showInStock, setShowInStock] = React.useState(false);
//   const [filterText, setFilterText] = React.useState('');
//   const [inventory, setInventory] = React.useState([]);
//
//   React.useEffect(() => {
//     setInventory(data)
//   }, []);
//
//   return (
//     <div className="inventory-app">
//       <Filters
//         showInStock={showInStock}
//         filterText={filterText}
//         toggleShowInStock={() => setShowInStock(prev => !prev)}
//         updateFilterText={(e) => setFilterText(e.target.value)}
//       />
//       <Table
//         inventory={inventory}
//         showInStock={showInStock}
//         filterText={filterText}
//       />
//     </div>
//   )
// }

export default class App extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     inventory: [],
  //     showInStock: false,
  //     filterText: '',
  //   }
  // }
  state = {
    inventory: [],
    showInStock: false,
    filterText: '',
  }

  componentDidMount() {
    this.setState({inventory: data});
  }

  toggleShowInStock() {
    this.setState(prevState => {
      return {showInStock: !prevState.showInStock}
    });
  }

  updateFilterText(e) {
    this.setState({filterText: e.target.value})
  }

  render() {
    return(
      <div className="inventory-app">
        <Filters
          showInStock={this.state.showInStock}
          filterText={this.state.filterText}
          toggleShowInStock={() => this.toggleShowInStock()}
          updateFilterText={(e) => this.updateFilterText(e)}
        />
        <Table
          inventory={this.state.inventory}
          showInStock={this.state.showInStock}
          filterText={this.state.filterText}
        />
      </div>
    )
  }
}
