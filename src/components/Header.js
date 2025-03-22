import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/products">Shop</Link>
      <Link to="/cart">🛒 Cart ({cartCount})</Link>
    </header>
  );
};

export default Header;
