import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={`/images/${item.image}`} alt={item.name} />
              <h3>{item.name}</h3>
              <span>${item.price} x {item.quantity}</span>
            </div>
          ))}
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
