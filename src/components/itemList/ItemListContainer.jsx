import React, { useEffect, useState } from "react";
import productsPromise from '../Utils/promises';
import products from "../Utils/products";
import ItemList from "./Itemlist";

function ItemListContainer () {

    const [product, setProduct] = useState([]);

    useEffect( () => {
        productsPromise.then((resp) => 
        setProduct(resp)
        ).catch((err) => console.log('Se ha producido un error'))
    }, []);

    return(
        <div>
            <ItemList prods={product} />
        </div>
    )
}

export default ItemListContainer;