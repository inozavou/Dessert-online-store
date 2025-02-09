function ItemsCount({ quantities }) {
  return (
    <div className="cart-header">
      Your cart(
      {Object.values(quantities).reduce((sum, value) => sum + value, 0)})
    </div>
  );
}

export default ItemsCount;
