import dessertData from "./data.json";

function Dessert({ cartItems, setCartItems, quantities, setQuantities }) {
  // console.log(quantities);

  function getItemQuantity(dessert) {
    const item = cartItems.find((item) => item.name === dessert.name);
    return item ? quantities[dessert.name] : 0;
  }

  function addToCart(dessert) {
    setCartItems([...cartItems, { ...dessert }]);
    setQuantities({ ...quantities, [dessert.name]: 1 });
  }

  function updateQuantity(dessert, change) {
    setQuantities({ ...quantities, [dessert.name]: 0 + change });
  }

  return (
    <section className="dessert-section">
      <h1>Desserts</h1>
      <div className="dessert-container">
        {dessertData.map((dessert) => {
          const quantity = getItemQuantity(dessert);

          return (
            <div className="dessert" key={dessert.name}>
              {quantity === 0 ? (
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    if (!cartItems.some((item) => item.name === dessert.name)) {
                      addToCart(dessert);
                    }
                  }}
                >
                  <img
                    className="addToCart-icon"
                    src="./images/icon-add-to-cart.svg"
                    alt="add to cart"
                  />
                  Add to Cart
                </button>
              ) : (
                <div className="quantity-controls">
                  <button
                    className="decrease-quantity-button"
                    onClick={() => {
                      updateQuantity(dessert, quantity - 1);
                    }}
                  >
                    -
                  </button>
                  {quantity}
                  <button
                    className="increase-quantity-button"
                    onClick={() => {
                      updateQuantity(dessert, quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              )}

              <img
                className="dessert-image"
                src={dessert.image.desktop}
                alt={dessert.name}
              />
              <div className="dessert-info">
                <p className="dessert-category">{dessert.category}</p>
                <strong className="dessert-title">{dessert.name}</strong>
                <p className="dessert-price">${dessert.price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Dessert;
