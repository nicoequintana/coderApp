import React from "react";
import Item from "./Item";
import s from '../Modules/itemList.module.css';


function ItemList ({products}) {


    return(
        <div className="container-fluid">
            <div className={s.items}>
                {products.map((e)=>(
                    <Item key={e.id} id={e.id} title={e.name} price={e.price} stock={e.stock} thumbnail={e.image}/>
                ))}
            </div>
        </div>
    )
}

export default ItemList;