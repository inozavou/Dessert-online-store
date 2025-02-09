import { useState } from "react";
import "./App.css";
import Dessert from "./Dessert";
import Cart from "./Cart";
import Modal from "./Modal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  function setClose() {
    setIsOpen(false);
  }

  return (
    <div className="app">
      <Dessert
        cartItems={cartItems}
        setCartItems={setCartItems}
        quantities={quantities}
        setQuantities={setQuantities}
      />
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        quantities={quantities}
        setIsOpen={setIsOpen}
      />
      <Modal
        cartItems={cartItems}
        quantities={quantities}
        isOpen={isOpen}
        onClose={setClose}
      />
    </div>
  );
}

export default App;
