
import "./App.css";

const products = [
  {
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: "₹50 / kg",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Fresh Carrots",
    category: "Vegetables",
    price: "₹60 / kg",
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Fresh Apples",
    category: "Fruits",
    price: "₹120 / kg",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Fresh Spinach",
    category: "Leafy Greens",
    price: "₹30 / bunch",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=700&q=80",
  },
];

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          🌱 FarmFresh
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="hero-content">
          <p className="hero-label">FRESH FROM LOCAL FARMS</p>

          <h1>
            Fresh Food.
            <br />
            <span>Directly From Farmers.</span>
          </h1>

          <p className="hero-description">
            Discover fresh and quality farm products directly from local
            farmers. Shop fresh, support farmers, and enjoy better food.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Shop Now →
            </button>

            <button className="secondary-btn">
              Explore Products
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>100%</strong>
              <span>Fresh Products</span>
            </div>

            <div>
              <strong>Local</strong>
              <span>Trusted Farmers</span>
            </div>

            <div>
              <strong>Fast</strong>
              <span>Home Delivery</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=80"
            alt="Fresh vegetables"
          />

          <div className="fresh-card">
            <span>🌿</span>
            <div>
              <strong>Farm Fresh Connect</strong>
              <small>Picked with care</small>
            </div>
          </div>
        </div>

      </section>

      {/* Popular Products */}
      <section className="products-section">

        <div className="section-header">
          <div>
            <p className="section-label">OUR PRODUCTS</p>
            <h2>Popular Products</h2>
            <p>
              Fresh products from our trusted local farmers.
            </p>
          </div>

          <button className="view-all-btn">
            View All →
          </button>
        </div>

        <div className="product-grid">

          {products.map((product, index) => (
            <div className="product-card" key={index}>

              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="fresh-tag">
                  Fresh
                </span>
              </div>

              <div className="product-details">

                <p className="product-category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <div className="product-footer">
                  <strong>{product.price}</strong>

                  <button className="add-btn">
                    +
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="why-section">

        <div className="why-heading">
          <p className="section-label">WHY FARMFRESH?</p>

          <h2>
            Freshness You Can Trust
          </h2>

          <p>
            We connect customers directly with local farmers
            to make fresh food easily accessible.
          </p>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">🌱</div>
            <h3>Farm Fresh</h3>
            <p>
              Fresh and quality products directly from local farms.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🤝</div>
            <h3>Support Farmers</h3>
            <p>
              Help local farmers reach customers without unnecessary
              middlemen.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🚚</div>
            <h3>Easy Delivery</h3>
            <p>
              Order your favourite farm products and get them delivered.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">✓</div>
            <h3>Trusted Quality</h3>
            <p>
              Shop from verified farmers and quality products.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">

        <div>
          <p>READY TO SHOP FRESH?</p>

          <h2>
            Good Food Starts With Good Farmers.
          </h2>
        </div>

        <button>
          Start Shopping →
        </button>

      </section>

      {/* Footer */}
      <footer>

        <div className="footer-logo">
          🌱 FarmFresh
        </div>

        <p>
          Connecting local farmers with customers for a fresher tomorrow.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="copyright">
          © 2026 FarmFresh Connect. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;
