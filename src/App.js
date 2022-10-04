import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import ItemListContainer from "./components/Containers/ItemListContainer";
import NavSetup from "./components/navbar/NavSetup";
import CartProvider from "./Context/CartContext";
import Cart from "./components/cart-site/Cart";
import Checkout from "./components/checkout/Checkout";

function App() {
  return(
    <CartProvider>
      <BrowserRouter>
      <NavSetup />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/products/:category' element={<ItemListContainer />} />
          <Route path='/products/' element={<ItemListContainer />} />
          <Route path='/items/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout/' element={<Checkout />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
