import ItemsCount from "./ItemsCount";
import Total from "./Total";
import SelectedItem from "./SelectedItem";

function Cart({ cartItems, quantities, setIsOpen }) {
  // quantities[cartItems[0]?.name]
  console.log(cartItems);

  return (
    <div className="cart-container">
      {<ItemsCount cartItems={cartItems} quantities={quantities} />}

      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <img
            className="image-empty-cart"
            src="./images/illustration-empty-cart.svg"
            alt="empty-cart-message"
          />{" "}
          <p className="text-empty-cart">Your added items will appear here</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <SelectedItem cartItems={cartItems} quantities={quantities} />
          </div>
          <div className="cart-bottom-section">
            <div className="total">
              <p className="order-total">Order Total</p>
              {<Total cartItems={cartItems} quantities={quantities} />}
            </div>
            <div className="carbon-neutral-box">
              <img
                className="carbon-neutral-icon"
                src="./images/icon-carbon-neutral.svg"
                alt="add to cart"
              />{" "}
              <p className="carbon-neutral-text">
                This is a <span>carbon-neutral</span> delivery
              </p>
            </div>
            <button
              className="confirm-order-button"
              onClick={() => setIsOpen(true)}
            >
              Confirm order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
