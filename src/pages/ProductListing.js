import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { addToCart } from "../redux/cartSlice"; 
import '../styles/product.css';

const ProductListing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get products and cart from Redux
  const products = useSelector((state) => state.products.items); // Adjust based on your store structure
  const cart = useSelector((state) => state.cart.items);

  // Handle add to cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-listing-container">
      {/* Header with logo and cart */}
      <div className="header">
        <h1>Paradise Nursery</h1>
        <div className="cart-icon" onClick={() => navigate("/cart")}>
          🛒
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              addToCart={handleAddToCart}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
