import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

function ProductTable() {
  return (
    <div className="product-table">
      product table
      <ProductCategoryRow />
      <ProductRow />
    </div>
  );
}

export default ProductTable;
