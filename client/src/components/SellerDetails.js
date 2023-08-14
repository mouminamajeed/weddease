// SellerDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import profile from "../data/profile-placeholder.png";

const SellerDetails = () => {
  const { sellerId } = useParams(); 

  const [sellerDetails, setSellerDetails] = useState({});

  useEffect(() => {
    const fetchSellerDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/wedease/seller/${sellerId}`
        );

        if (response.ok) {
          const data = await response.json();
          setSellerDetails(data);
        } else {
          throw new Error("Error fetching seller details.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSellerDetails();
  }, [sellerId]);

  return (
    <div className="seller-details-container">
      
      <h2>{sellerDetails.name}</h2>
      <img src={profile} alt="profile" />
      <p>Email: {sellerDetails.email}</p>
      <p>Phone Number: {sellerDetails.phoneNumber}</p>
      <p>Bio: {sellerDetails.bio}</p>
      
    </div>
  );
};

export default SellerDetails;
