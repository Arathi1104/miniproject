
import { useState } from "react";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  
  // Increase quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];

    updatedCart[index].quantity += 1;

    updateCart(updatedCart);
  };

  // Decrease quantity
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }

    updateCart(updatedCart);
  };

  // Remove product
  const removeProduct = (index) => {
    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    updateCart(updatedCart);
  };

  // Calculate total
  const totalAmount = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Go to checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }

    window.location.href = "/checkout";
  };

  return (
    <div className="cart-page">

      {/* Navbar */}
      <nav className="cart-navbar">

        <div className="cart-logo">
          🌱 FarmFresh
        </div>

        <div className="cart-nav-links">

          <a href="/">
            Home
          </a>

          <a href="/products">
            Products
          </a>

          <a
            href="/cart"
            className="active"
          >
            Cart
          </a>

        </div>

        <div className="cart-nav-buttons">

          <a
            href="/login"
            className="cart-login"
          >
            Login
          </a>

          <a
            href="/signup"
            className="cart-signup"
          >
            Sign Up
          </a>

        </div>

      </nav>


      {/* Header */}
      <section className="cart-header">

        <p className="cart-label">
          YOUR SHOPPING CART
        </p>

        <h1>
          My Cart
        </h1>

        <p>
          Review your selected products before checkout.
        </p>

      </section>


      {/* Cart Content */}
      <section className="cart-content">

        {cart.length === 0 ? (

          /* Empty Cart */
          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <h2>
              Your cart is empty
            </h2>

            <p>
              Add some fresh products from local farmers.
            </p>

            <a
              href="/products"
              className="continue-shopping-btn"
            >
              Continue Shopping →
            </a>

          </div>

        ) : (

          <div className="cart-layout">

            {/* Cart Items */}
            <div className="cart-items">

              <h2>
                Cart Items ({cart.length})
              </h2>

              {cart.map((item, index) => (

                <div
                  className="cart-item"
                  key={index}
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  {/* Product Info */}
                  <div className="cart-item-info">

                    <p className="cart-category">
                      {item.category}
                    </p>

                    <h3>
                      {item.name}
                    </h3>

                    <strong>
                      ₹{item.price} / {item.unit}
                    </strong>

                  </div>


                  {/* Quantity */}
                  <div className="quantity-control">

                    <button
                      onClick={() =>
                        decreaseQuantity(index)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(index)
                      }
                    >
                      +
                    </button>

                  </div>


                  {/* Item Total */}
                  <div className="cart-item-total">

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeProduct(index)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

              <a
                href="/products"
                className="continue-link"
              >
                ← Continue Shopping
              </a>

            </div>


            {/* Order Summary */}
            <div className="cart-summary">

              <h2>
                Order Summary
              </h2>

              <div className="summary-row">

                <span>
                  Items
                </span>

                <span>
                  {cart.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}
                </span>

              </div>

              <div className="summary-row">

                <span>
                  Subtotal
                </span>

                <span>
                  ₹{totalAmount}
                </span>

              </div>

              <div className="summary-row">

                <span>
                  Delivery
                </span>

                <span className="free">
                  FREE
                </span>

              </div>


              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{totalAmount}
                </strong>

              </div>


              {/* Checkout Button */}
              <button
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Proceed to Checkout →
              </button>

            </div>

          </div>

        )}

      </section>


      {/* Footer */}
      <footer className="cart-footer">

        <div className="cart-logo">
          🌱 FarmFresh
        </div>

        <p>
          Connecting local farmers with customers
          for a fresher tomorrow.
        </p>

        <div className="cart-footer-links">

          <a href="/">
            Home
          </a>

          <a href="/products">
            Products
          </a>

          <a href="/about">
            About
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

        <div className="cart-copyright">
          © 2026 FarmFresh Connect. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Cart;

