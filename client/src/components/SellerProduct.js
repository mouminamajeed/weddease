import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/SellerProduct.css'; // Import the CSS file

const SellerProduct = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="product-list-container">
      <h2>Category Page</h2>
      <div className="product-card-list">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            {product.image && (
              <Card.Img src={product.image} alt="Product" className="product-image" />
            )}
            <Card.Body>
              <Card.Title className="product-card-title">{product.name}</Card.Title>
              <Card.Text className="product-card-description">{product.description}</Card.Text>
              <Card.Text className="product-card-price">Price: ${product.price}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SellerProduct;
