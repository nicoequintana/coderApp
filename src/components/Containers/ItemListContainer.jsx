import React, { useEffect, useState } from "react";
import s from '../Modules/itemList.module.css';
import products from '../Utils/products'
import ItemList from "../itemList/Itemlist";
import { useParams } from "react-router-dom";

function ItemListContainer () {
    const [loading, setLoading] = useState(true);
    const [prods, setProds] = useState([]);
    const {category} = useParams()

    useEffect( () => {
        // setTimeout( () => {
        //     fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${category}`)
        //     .then((res)=>res.json())
        //     .then((data) => {
        //         console.log(data.results)
        //         setProducts(data.results)
        //     })
        //     .catch((err) => console.log(err))
        //     .finally(()=>{setLoading(false)})
        // }, 500)

        const promiseProducts = new Promise((res, rej) => {
            setTimeout( () => {
                res(products);
            }, 500);
        });

        if(category) {
            promiseProducts.then(resp => setProds(resp.filter(products => products.category === category)))
        } else {
            promiseProducts.then(resp => setProds(resp))
        }

        promiseProducts.catch(err => console.log(err));
        promiseProducts.finally(setLoading(false));


    }, [category]);


    return(
        <div className={s.itemListContainer}>
            {loading ? <h1 className={s.loader}> Estamos cargando el sitio, <br /> por favor espera.</h1> :  <ItemList products={prods} />}

        </div>
    )
}

export default ItemListContainer;