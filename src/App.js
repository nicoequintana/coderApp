import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/itemList/ItemListContainer";
import NavBar from "./components/navbar/NavBar";

function App() {




  return(
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  )
}

export default App;
