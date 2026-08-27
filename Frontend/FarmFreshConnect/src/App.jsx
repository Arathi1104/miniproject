import "./App.css";

const products = [
  {
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: "₹50 / kg",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
  },
  {
    name: "Fresh Carrots",
    category: "Vegetables",
    price: "₹60 / kg",
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a",
  },
  {
    name: "Fresh Bananas",
    category: "Fruits",
    price: "₹45 / kg",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
  },
  {
    name: "Fresh Spinach",
    category: "Leafy Vegetables",
    price: "₹30 / bunch",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
  },
];

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          FarmFresh<span>Connect</span>
        </div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/farmers">Farmers</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="small-title">FRESH FROM LOCAL FARMS</p>

          <h1>
            Fresh Food.
            <br />
            <span>Directly From Farmers.</span>
          </h1>

          <p className="hero-text">
            Buy fresh and quality farm products directly from local farmers.
            Healthy food, fair prices, and trusted farmers.
          </p>

          <div className="hero-buttons">
            <button className="shop-btn">
              Shop Fresh Products →
            </button>

            <button className="farmer-btn">
              Explore Farmers
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
            alt="Fresh Farm"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="section-heading">
          <p>EXPLORE</p>
          <h2>Shop by Category</h2>
        </div>

        <div className="category-container">

          <div className="category-card">
            <div className="category-icon">🥬</div>
            <h3>Vegetables</h3>
            <p>Fresh farm vegetables</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🍎</div>
            <h3>Fruits</h3>
            <p>Fresh seasonal fruits</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🌾</div>
            <h3>Grains</h3>
            <p>Quality grains & cereals</p>
          </div>

          <div className="category-card">
            <div className="category-icon">🥛</div>
            <h3>Dairy</h3>
            <p>Fresh dairy products</p>
          </div>

        </div>
      </section>

      {/* Popular Products */}
      <section className="products-section">

        <div className="section-heading product-heading">
          <div>
            <p>FRESH PICKS</p>
            <h2>Popular Products</h2>
          </div>

          <button className="view-btn">
            View All →
          </button>
        </div>

        <div className="product-container">

          {products.map((product, index) => (
            <div className="product-card" key={index}>

              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <p className="product-category">
                  {product.category}
                </p>

                <h3>{product.name}</h3>

                <div className="product-bottom">
                  <strong>{product.price}</strong>
                  <button>Add to Cart</button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Farmer CTA */}
      <section className="farmer-section">
        <div>
          <p>ARE YOU A FARMER?</p>
          <h2>Sell Your Fresh Products Directly to Customers.</h2>
          <p>
            Join FarmFresh Connect and grow your local customer base.
          </p>
          <button>Become a Farmer →</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-logo">
          FarmFresh<span>Connect</span>
        </div>

        <p>
          Connecting local farmers with customers for fresh,
          quality food.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="copyright">
          © 2026 FarmFresh Connect. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;