import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  console.log(bottle);
  return (
    <div className="bottle">
      <h3>Bottle: {name}</h3>
      <img src={img} alt="" />
      <div className="pricePurchase">
        <p>Price:$ {price}</p>
        <button onClick={() => handleAddToCart(bottle)} className="btn-primary">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Bottle;
