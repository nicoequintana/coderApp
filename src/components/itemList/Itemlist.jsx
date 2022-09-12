import React from "react";
import Item from "./Item";
import s from './itemList.module.css';


function ItemList ({products}) {

    return(
        <div className="container-fluid">
            <div className={s.items}>
                {products.map((e)=>(
                    <Item key={e.id} id={e.id} title={e.title} price={e.price} stock={e.available_quantity} thumbnail={e.thumbnail}/>
                ))}
            
            </div>
        </div>
    )
}

export default ItemList;