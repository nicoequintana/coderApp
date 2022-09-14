import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {




  return(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/aboutus/' element={<AboutUs />} />
        <Route path='/products/:category/' element={<ItemListContainer />} />
        {/* <Route path='/products/:category/:id/' element={<ItemDetailContainer />} /> */}
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
