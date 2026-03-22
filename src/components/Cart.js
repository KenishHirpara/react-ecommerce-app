import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="product-card">
              <h4>{item.title}</h4>
              <p className="price">${item.price}</p>

              <button
                className="btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <Link to="/checkout">
            <button className="btn">Go to Checkout</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;