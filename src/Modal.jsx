import SelectedItem from "./SelectedItem";
import Total from "./Total";

function Modal({ cartItems, quantities, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img
          className="icon-order-confirmed"
          src="./images/icon-order-confirmed.svg"
          alt="icon-order-confirmed"
        />

        <h3>Order Confirmed</h3>
        <p className="modal-enjoy-food-message">Hope you enjoy your food!</p>
        <div className="order-items">
          {/* {cartItems.map((cartItem, index) => (
          <img
            key={index}
            className="modal-thumbnail"
            src={cartItem.image.thumbnail}
            alt={cartItem.name}
          />
        ))} */}
          <SelectedItem cartItems={cartItems} quantities={quantities} />
        </div>
        <div className="modal-bottom-section">
          <div className="total">
            <p className="order-total">Order Total</p>
            {<Total cartItems={cartItems} quantities={quantities} />}
          </div>
          <button className="start-new-order-button">Start new order</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
