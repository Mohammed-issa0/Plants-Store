import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./component/Navbar";
import ProductDetails from "./component/productDetails";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import Offer from "./component/Offer";
import Services from "./component/Services";
import Product from "./component/Product";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Map from "./component/Map";
import OfferPage from "./component/offerPage";
import Footer from "./component/Footr";

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Offer />
      <OfferPage />
      <Services />
      <Product />
      <Map />
      <ProductDetails />
      <Cart />
      <Contact />
      <Footer />
    </>
  );
}
///////////////
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Page />
  </StrictMode>
);
