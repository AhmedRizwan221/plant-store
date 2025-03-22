import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "../styles/cart.css";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty.</p> : cartItems.map(item => <CartItem key={item.id} item={item} />)}

      {/* Cart Summary */}
      <div className="cart-summary">
        <h3>Total Items: {totalItems}</h3>
        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
        <button className="checkout-btn" disabled={cartItems.length === 0}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
