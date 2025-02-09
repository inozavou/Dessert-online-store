function SelectedItem({ cartItems, quantities }) {
  return (
    <ul className="selected-items">
      {cartItems.map((cartItem) => (
        <li className="selected-item" key={cartItem.name}>
          <p className="dessert-title">{cartItem.name}</p>
          <div className="selected-item-info">
            <strong className="selected-item-quantity">
              {quantities[cartItem.name]}x
            </strong>
            <p className="selected-item-price">${cartItem.price.toFixed(2)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SelectedItem;
