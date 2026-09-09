
import { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  const totalAmount = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      return;
    }

    const order = {
      customer: formData,
      products: cart,
      paymentMethod: paymentMethod,
      totalAmount: totalAmount,
      orderDate: new Date().toISOString(),
      status: "Order Placed",
    };

    localStorage.setItem(
      "order",
      JSON.stringify(order)
    );

    localStorage.removeItem("cart");

    window.location.href = "/order-confirmation";
  };

  return (
    <div className="checkout-page">

      {/* Navbar */}
      <nav className="checkout-navbar">

        <div className="checkout-logo">
          🌱 FarmFresh
        </div>

        <div className="checkout-nav-links">

          <a href="/">
            Home
          </a>

          <a href="/products">
            Products
          </a>

          <a href="/cart">
            Cart 🛒
          </a>

        </div>

        <div className="checkout-nav-buttons">

          <a
            href="/login"
            className="checkout-login"
          >
            Login
          </a>

          <a
            href="/signup"
            className="checkout-signup"
          >
            Sign Up
          </a>

        </div>

      </nav>

      {/* Header */}
      <section className="checkout-header">

        <p className="checkout-label">
          COMPLETE YOUR ORDER
        </p>

        <h1>
          Checkout
        </h1>

        <p>
          Enter your delivery details and choose a payment method.
        </p>

      </section>

      {/* Checkout Content */}
      <section className="checkout-content">

        {/* Delivery Details */}
        <div className="checkout-form-card">

          <h2>
            Delivery Address
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>
                Address
              </label>

              <textarea
                name="address"
                placeholder="House name, street, locality"
                value={formData.address}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Pincode
                </label>

                <input
                  type="text"
                  name="pincode"
                  placeholder="Enter pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Payment */}
            <div className="payment-section">

              <h2>
                Payment Method
              </h2>

              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <div>
                  <strong>
                    Cash on Delivery
                  </strong>

                  <span>
                    Pay when your order arrives.
                  </span>
                </div>

              </label>

              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <div>
                  <strong>
                    Online Payment
                  </strong>

                  <span>
                    Pay securely online.
                  </span>
                </div>

              </label>

            </div>

            <button
              type="submit"
              className="place-order-btn"
              disabled={cart.length === 0}
            >
              Place Order
            </button>

          </form>

        </div>

        {/* Order Summary */}
        <div className="checkout-summary">

          <h2>
            Order Summary
          </h2>

          {cart.length === 0 ? (

            <div className="checkout-empty">

              <p>
                Your cart is empty.
              </p>

              <a href="/products">
                Browse Products
              </a>

            </div>

          ) : (

            <>
              <div className="checkout-items">

                {cart.map((item) => (

                  <div
                    className="checkout-item"
                    key={item.name}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div>

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        {item.quantity} × ₹{item.price}
                      </p>

                    </div>

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                  </div>

                ))}

              </div>

              <div className="checkout-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{totalAmount}
                </strong>

              </div>

            </>

          )}

        </div>

      </section>

      {/* Footer */}
      <footer className="checkout-footer">

        <div className="checkout-logo">
          🌱 FarmFresh
        </div>

        <p>
          Connecting local farmers with customers
          for a fresher tomorrow.
        </p>

        <div className="checkout-footer-links">

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

        <div className="checkout-copyright">
          © 2026 FarmFresh Connect. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Checkout;

