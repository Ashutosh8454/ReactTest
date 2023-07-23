import React from 'react';
import ProductItem from './ProductItem';
import productsData from '../../data/products.json';

const ProductList = ({ onProductClick }) => {
  return (
    <div className="product-list">
      {productsData.products.map((product) => (
        <ProductItem key={product.id} product={product} onClick={() => onProductClick(product)} />
      ))}
    </div>
  );
};

export default ProductList;
