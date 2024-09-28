import React from 'react'
import './Purchase.css'

const Purchase = () => {
  return (
    <div>
        <section className="purchase-section">
        <h2>Purchase a Product</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search items to purchase..."
            className="search-input"
          />
          <button className="search-btn">
            <img
              src="search-icon.png"
              alt="Search"
              className="search-icon"
            />
          </button>


          
        </div>

        <div className="product-grid">
          <div className="product-item">
            <img
              src="https://example.com/seeds1.jpg"
              alt="Seeds 1"
              className="product-image"
            />
            <p>Seeds Name</p>
          </div>
          <div className="product-item">
            <img
              src="https://example.com/seeds2.jpg"
              alt="Seeds 2"
              className="product-image"
            />
            <p>Seeds Name</p>
          </div>
          <div className="product-item">
            <img
              src="https://example.com/seeds3.jpg"
              alt="Seeds 3"
              className="product-image"
            />
            <p>Seed Name</p>
          </div>
          <div className="product-item">
            <img
              src="https://example.com/product1.jpg"
              alt="Product 1"
              className="product-image"
            />
            <p>Product Name</p>
          </div>
          <div className="product-item">
            <img
              src="https://example.com/product2.jpg"
              alt="Product 2"
              className="product-image"
            />
            <p>Products Name</p>
          </div>
          <div className="product-item">
            <img
              src="https://example.com/product3.jpg"
              alt="Product 3"
              className="product-image"
            />
            <p>Product Name</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Purchase
