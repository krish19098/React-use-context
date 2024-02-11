import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartPage = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalQuantity,
    calculateTotalAmount,
  } = useContext(CartContext);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      setTotalQuantity(calculateTotalQuantity());
      setTotalAmount(calculateTotalAmount());
    }
  }, [cartItems, calculateTotalQuantity, calculateTotalAmount]);

  return (
    <div>
      <h1>Cart Page</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
      ))}
      <h4>Total Quantity: {totalQuantity}</h4>
      <h4>Total Amount: {totalAmount}</h4>
    </div>
  );
};

export default CartPage;
