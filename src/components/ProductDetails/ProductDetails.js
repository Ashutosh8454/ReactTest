import React from 'react';

const ProductDetails = ({ product, onAddToCart }) => {
  const { name, price, quantity, image } = product;

  return (
    <div className="product-details">
      <img src={`/images/${image}`} alt={name} />
      <h3>{name}</h3>
      <span>${price}</span>
      <p>Quantity: {quantity}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
