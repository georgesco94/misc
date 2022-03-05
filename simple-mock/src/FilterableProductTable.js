import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function FilterableProductTable(props) {
  console.log(props);
  return (
    <div className="filterable-product-table">
      filterable product table
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default FilterableProductTable;
