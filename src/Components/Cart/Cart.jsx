import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="cart-parent">
      <h4>Cart: {cart.length}</h4>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div className="remove-item" key={bottle.id}>
            <img src={bottle.img}></img>
            <button
              onClick={() => handleRemoveFromCart(bottle.id)}
              className="btn-primary"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
