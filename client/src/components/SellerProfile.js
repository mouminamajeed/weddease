
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/SellerProfile.css"; // You should create this CSS file
import profile from "../data/profile-placeholder.png";
import Header from "./Header";
import Footer from "./Footer";

const SellerProfile = () => {
  const [sellerList, setSellerList] = useState([]);
  const { category } = useParams();

  const Handle = () => {
    alert("Product purchased"); // Modify the message as needed
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/wedease/sellers/' + new URLSearchParams({ category }))

        if (response.ok) {
          const data = await response.json();
          const sellerItems = data.map((seller) => (
            <div className="seller-card" key={seller.id}>
              <Link
                to={`/sellers/${category}/${seller.id}`}
                className="seller-card-link"
              >
                <img
                  className="seller-picture-list"
                  src={'http://localhost:8080/images/'+String(seller.imagePath).substring(8)}
                  alt="profile"
                />
                <h3>Name</h3>
                <p>{seller.name}</p>
                <h3>Email</h3>
                <p>{seller.email}</p>
                <h3>Phone Number</h3>
                <p>{seller.phoneNumber}</p>
                <h3>Description</h3>
                <p>{seller.description}</p>
              </Link>
              <Button variant="primary" size="lg" onClick={Handle} className="purchase-button">
                Purchase
              </Button>
            </div>
          ));

          setSellerList(sellerItems);
        } else {
          throw new Error("Error fetching seller data.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <div className="back-img">
        <Header />
        <br />
        <h2 className="seller-type">{category}</h2>
        {sellerList.length > 0 ? (
          <div className="seller-card-container">{sellerList}</div>
        ) : (
          <p className="para">No sellers found in this category.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SellerProfile;
