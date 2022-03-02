import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function FilterableProductTable() {
  return (
    <div className="filterable-product-table">
      filterable product table
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default FilterableProductTable;
