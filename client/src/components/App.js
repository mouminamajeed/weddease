import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./Main";
import Contact from "./Contact";
import SellerButtons from "./SellerButtons";
import WorkerRegistration from "./WorkerRegistration";
import WorkerLogin from "./WorkerLogin";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import WorkerCategory from "./WorkerCategory";
import WorkerHome from "./WorkerHome";
import WorkerProfile from "./WorkerProfile";
import WorkerDetails from "./WorkerDetails";
import CategoryButtons from "./CategoryButtons";
import CartPage from "./CartPage";
import AddressPage from "./AddressPage";
import PaymentGatewayPage from "./PaymentGatewayPage";
import UpdateProfile from "./UpdateProfile";
import SellerProfile from "./SellerProfile";
import SellerPr from "./SellerPr";
import SellerCat from "./SellerCat";
import SellerLogin from "./SellerLogin";
import SellerHome from "./SellerHome";
import UpdateProfileSeller from "./UpdateProfileSeller"; 
import SellerRegistration from "./SellerRegistration";
import SellerProductDetails from "./SellerProductDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SellerButtons" element={<SellerButtons />} />
        <Route path="/WorkerRegistration" element={<WorkerRegistration />} />
        <Route path="/WorkerLogin" element={<WorkerLogin />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CategoryButtons" element={<CategoryButtons />} />
        <Route path="/WorkerCategory" element={<WorkerCategory />} />
        <Route path="/WorkerHome" element={<WorkerHome />} />
        <Route path="/WorkerProfile" element={<WorkerProfile />} />
        <Route path="/workers/:category" element={<WorkerProfile />} />
        <Route path="/workers/:category/:workerId" element={<WorkerDetails />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/PaymentGatewayPage" element={<PaymentGatewayPage />} />
        <Route path="/UpdateProfile" element={<UpdateProfile />} />


        <Route path="/SellerProfile" element={<SellerProfile />} />
        <Route path="/SellerPr" element={<SellerPr/>} />
        <Route path="/SellerHome" element={<SellerHome />} />
        <Route path="/SellerLogin" element={<SellerLogin />} />
        <Route path="/UpdateProfileSeller" element={<UpdateProfileSeller />} />
        <Route path="/SellerRegistration" element={<SellerRegistration />} />
        <Route path="/SellerCat" element={<SellerCat />} />
        <Route path="/SellerProductDetails" element={<SellerProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
