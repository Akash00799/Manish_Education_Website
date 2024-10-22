import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import styles from "../styles/Cart.module.css";
import Lottie from "react-lottie";
import animationData from "../assets/emptyCartAnimation.json";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleRemoveFromCart = (course) => {
    dispatch(removeFromCart(course));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrementQuantity = (course) => {
    dispatch(incrementQuantity(course));
    setShowNotification(true);
  };

  const handleDecrementQuantity = (course) => {
    if (course.quantity > 1) {
      dispatch(decrementQuantity(course));
    } else {
      handleRemoveFromCart(course);
    }
  };

  const handleApplyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscount(10);
    } else if (discountCode === "SAVE20") {
      setDiscount(20);
    } else {
      setDiscount(0);
    }
  };

  const calculateTotalPrice = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total - (total * discount) / 100;
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className={styles.quantityControls}>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleIncrementQuantity(item)}
                >
                  +
                </button>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleDecrementQuantity(item)}
                >
                  -
                </button>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className={styles.discountSection}>
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter discount code"
              className={styles.discountInput}
            />
            <button
              onClick={handleApplyDiscount}
              className={styles.discountButton}
            >
              Apply
            </button>
          </div>
          <div className={styles.totalAmount}>
            <h3>Total: ${calculateTotalPrice().toFixed(2)}</h3>
            <button className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
          <button className={styles.clearButton} onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <Lottie options={defaultOptions} height={500} width={500} />
          <p>Your cart is empty.</p>
        </div>
      )}
      {showNotification && (
        <div className={styles.notification}>Item added to cart!</div>
      )}
    </div>
  );
};

export default Cart;
