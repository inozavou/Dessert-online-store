function Total({ cartItems, quantities }) {
  const total = cartItems.reduce((sum, cartItem) => {
    const quantity = quantities[cartItem.name];
    const itemTotal = cartItem.price * quantity;
    return sum + itemTotal;
  }, 0);

  return <h4 className="total-amount">${total.toFixed(2)}</h4>;
  //${total ? total : 0}
  // .reduce((sum, value) => sum + value, 0);});
}
export default Total;
