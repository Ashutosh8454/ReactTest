import React from 'react';

const ProductItem = ({ product, onClick }) => {
  const { name, price, image } = product;

  return (
    <div className="product-item" onClick={onClick}>
      <img src={`/images/${image}`} alt={name} />
      <h3>{name}</h3>
      <span>${price}</span>
    </div>
  );
};

export default ProductItem;
