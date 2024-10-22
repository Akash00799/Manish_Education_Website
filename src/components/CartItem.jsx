import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className={styles.cartItem}>
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button className={styles.removeButton} onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
