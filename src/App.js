import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import productsData from './data/products.json';

// Rest of the code remains the same


const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage when the app starts
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      const existingItemIndex = cartItems.findIndex(
        (item) => item.id === selectedProduct.id
      );

      if (existingItemIndex !== -1) {
        // If the product is already in the cart, update the quantity
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
        setCartItems(updatedCartItems);
      } else {
        // If the product is not in the cart, add it
        const newCartItem = { ...selectedProduct, quantity: 1 };
        setCartItems([...cartItems, newCartItem]);
      }
    }
  };

  useEffect(() => {
    // Save cart items to localStorage whenever the cartItems state changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="App">
      <h1>Ecommerce App</h1>
      <ProductList onProductClick={handleProductClick} />
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onAddToCart={handleAddToCart} />
      )}
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
