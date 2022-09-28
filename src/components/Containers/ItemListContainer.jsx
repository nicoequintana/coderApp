import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import s from '../Modules/itemList.module.css';
//import products from '../Utils/products'
import ItemList from "../itemList/Itemlist";
import { useParams } from "react-router-dom";

function ItemListContainer () {
    const [loading, setLoading] = useState(true);
    const [prods, setProds] = useState([]);
    const {category} = useParams()

    useEffect( () => {
        const prodCollection = collection(db, 'products' );
        const categoryRef = category ? query(prodCollection, where('category', '==', category)) : prodCollection 
        getDocs(categoryRef).then((resp) => {
            const products = resp.docs.map((e) => {
                return{
                    id: e.id, ...e.data(),
                };
            });
           //console.log(products)
            setProds(products)
            setLoading(false)
        });    
    }, [category]);

    return(
        <div className={s.itemListContainer}>
            {loading ? <h1 className={s.loader}> Estamos cargando el sitio, <br /> por favor espera.</h1> :  <ItemList products={prods} />}
        </div>
    )
}
export default ItemListContainer;