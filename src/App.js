import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ItemDetail from "./components/itemDetail/ItemDetail";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/itemList/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {




  return(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/aboutus/' element={<AboutUs />} />
        <Route exact path='/products/' element={<ItemListContainer />} />
        <Route exact path='/products/:id' element={<ItemDetailContainer />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App;
