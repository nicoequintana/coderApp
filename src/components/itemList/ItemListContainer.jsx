import React, { useEffect, useState } from "react";
import s from './itemList.module.css';
//import products from "../Utils/products";
import ItemList from "./Itemlist";

function ItemListContainer () {
    const [loading, setLoading] = useState(true);
    const [products, setProduct] = useState([]);

    useEffect( () => {
        setTimeout( () => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
            .then((res)=>res.json())
            .then((data) => {
                //console.log(data.results)
                setProduct(data.results)
            })
            .catch((err) => err)
            .finally(()=>{setLoading(false)})
        }, 3000)


    }, []);

    return(
        <div className={s.itemListContainer}>
            {loading ? <h1 className={s.loader}> Estamos cargando el sitio, <br /> por favor espera.</h1> :  <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer;