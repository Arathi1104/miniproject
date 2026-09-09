import { useEffect, useState } from "react";
import axios from "axios";
import "./Product.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/products"
        );

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Unable to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item._id === product._id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item._id === product._id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          quantity: 1,
          unit: "kg",
        },
      ];
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    console.log("Cart:", updatedCart);
  };

  // Search and category filter
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">

      {/* ================= NAVBAR ================= */}

      <nav className="products-navbar">

        <div className="products-logo">
          🌱 FarmFresh
        </div>

        <div className="products-nav-links">

          <a href="/">
            Home
          </a>

          <a
            href="/products"
            className="active"
          >
            Products
          </a>

          <a href="/about">
            About
          </a>

          <a href="/contact">
            Contact
          </a>

          <a href="/cart">
            Cart 🛒
          </a>

        </div>

        <div className="products-nav-buttons">

          <a
            href="/login"
            className="products-login"
          >
            Login
          </a>

          <a
            href="/signup"
            className="products-signup"
          >
            Sign Up
          </a>

        </div>

      </nav>

      {/* ================= HEADER ================= */}

      <section className="products-header">

        <p className="products-label">
          FRESH FROM LOCAL FARMS
        </p>

        <h1>
          Fresh Products
        </h1>

        <p>
          Explore fresh and quality products directly from
          trusted local farmers.
        </p>

      </section>

      {/* ================= SEARCH & FILTER ================= */}

      <section className="products-controls">

        <div className="search-box">

          <span>
            🔍
          </span>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option value="All">
            All Categories
          </option>

          <option value="Vegetables">
            Vegetables
          </option>

          <option value="Fruits">
            Fruits
          </option>

          <option value="Leafy Greens">
            Leafy Greens
          </option>

        </select>

      </section>

      {/* ================= PRODUCTS ================= */}

      <section className="all-products">

        {/* Loading */}

        {loading && (

          <div className="no-products">

            <h3>
              Loading products...
            </h3>

            <p>
              Please wait.
            </p>

          </div>

        )}

        {/* Error */}

        {!loading && error && (

          <div className="no-products">

            <h3>
              {error}
            </h3>

            <p>
              Please try again later.
            </p>

          </div>

        )}

        {/* Products */}

        {!loading &&
          !error &&
          filteredProducts.length > 0 && (

            <div className="products-grid">

              {filteredProducts.map(
                (product) => (

                  <div
                    className="product-item"
                    key={product._id}
                  >

                    {/* Product Image */}

                    <div className="product-item-image">

                      <img
                        src={
                          product.image ||
                          "https://via.placeholder.com/700x500?text=Fresh+Product"
                        }
                        alt={product.name}
                      />

                      {product.availability && (
                        <span>
                          Fresh
                        </span>
                      )}

                    </div>

                    {/* Product Details */}

                    <div className="product-item-details">

                      <p>
                        {product.category}
                      </p>

                      <h3>
                        {product.name}
                      </h3>

                      <div className="product-item-bottom">

                        <strong>
                          ₹{product.price} / kg
                        </strong>

                        <button
                          type="button"
                          onClick={() =>
                            addToCart(product)
                          }
                          disabled={
                            !product.availability
                          }
                        >
                          {product.availability
                            ? "+ Add"
                            : "Unavailable"}
                        </button>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        {/* No Products */}

        {!loading &&
          !error &&
          filteredProducts.length === 0 && (

            <div className="no-products">

              <h3>
                No products found
              </h3>

              <p>
                Try searching for another product.
              </p>

            </div>

          )}

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="products-footer">

        <div className="products-logo">
          🌱 FarmFresh
        </div>

        <p>
          Connecting local farmers with customers
          for a fresher tomorrow.
        </p>

        <div className="footer-nav">

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

        <div className="products-copyright">
          © 2026 FarmFresh Connect. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Products;