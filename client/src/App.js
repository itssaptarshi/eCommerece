import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./scene/home/Home";
import ItemDetails from "./scene/itemDetails/ItemDetails";
import Checkout from "./scene/checkout/Checkout";
import Confirmation from "./scene/checkout/Confirmation";
import NavBar from "./scene/global/NavBar";
import CartMenu from "./scene/global/CartMenu";
import Footer from "./scene/global/Footer";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="item/:itemId" element={<ItemDetails/>} />
          <Route path="checkout" element={<Checkout/>} />
          <Route path="cart" element={<CartMenu/>} />
          <Route path="checkout/success" element={<Confirmation/>} />
        </Routes>
        <CartMenu/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
