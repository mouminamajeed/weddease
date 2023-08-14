// SellerPr.js
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import SellerCat from './SellerCat'; // Import SellerCategory component
import '../styles/SellerPr.css';

const SellerPr = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
    productImages: [], // Use an array for multiple images
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setProductData({ ...productData, productImages: files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!productData.productName.trim()) {
      validationErrors.productName = 'Product name is required';
    }
    if (!productData.productDescription.trim()) {
      validationErrors.productDescription = 'Product description is required';
    }
    if (!productData.productPrice) {
      validationErrors.productPrice = 'Product price is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      const productId = Date.now().toString();

      const newProduct = {
        id: productId,
        name: productData.productName,
        description: productData.productDescription,
        price: productData.productPrice,
        images: [...productData.productImages], // Store uploaded images in product object
      };

      setProducts([...products, newProduct]);

      setProductData({
        productName: '',
        productDescription: '',
        productPrice: '',
        productImages: [], // Clear uploaded images
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="app-container">
      <div className="back">
        <div className="seller-profile-container">
          <h2>Seller Profile</h2>
          <div className="product-upload-section">
            <h3>Upload Product</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="productName"
                value={productData.productName}
                onChange={handleInputChange}
                placeholder="Product Name"
              />
              {errors.productName && (
                <p className="error-message">{errors.productName}</p>
              )}
              <textarea
                name="productDescription"
                value={productData.productDescription}
                onChange={handleInputChange}
                placeholder="Product Description"
              />
              {errors.productDescription && (
                <p className="error-message">{errors.productDescription}</p>
              )}
              <input
                type="number"
                name="productPrice"
                value={productData.productPrice}
                onChange={handleInputChange}
                placeholder="Product Price  ₹"
              />
              {errors.productPrice && (
                <p className="error-message">{errors.productPrice}</p>
              )}
              <input
                type="file"
                multiple
                onChange={handleImageUpload}
              />
              <button type="submit">Upload Product</button>
            </form>
          </div>
          <SellerCat products={products}
          />
        </div>
      </div>
    </div>
  );
};

export default SellerPr;
