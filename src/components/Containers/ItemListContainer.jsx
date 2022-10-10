import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import s from '../Modules/itemList.module.css';
//import products from '../Utils/products'
import ItemList from "../itemList/Itemlist";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

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
            {loading ? <Loader /> :  <ItemList products={prods} />}
        </div>
    )
}
export default ItemListContainer;