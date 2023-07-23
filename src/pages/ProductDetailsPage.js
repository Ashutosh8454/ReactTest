import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import productsData from '../data/products.json';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === parseInt(productId));

  return (
    <div>
      <h1>Product Details Page</h1>
      {product ? <ProductDetails product={product} /> : <p>Product not found</p>}
    </div>
  );
};

export default ProductDetailsPage;
