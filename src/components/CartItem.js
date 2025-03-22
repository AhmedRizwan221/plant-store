import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className='cart-data'>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <div className='cart-btn'>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
        </div>
        <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
