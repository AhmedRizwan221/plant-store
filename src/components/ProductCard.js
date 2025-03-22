const ProductCard = ({ product, cart, addToCart }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button
        className="add-to-cart-btn"
        onClick={() => addToCart(product)}
        disabled={cart.some((item) => item.id === product.id)}
      >
        {cart.some((item) => item.id === product.id) ? "Added to Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
