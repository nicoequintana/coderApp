import React from "react";
import Item from "./Item";
import s from './itemList.module.css';


function ItemList ({prods}) {

    return(
        <div className={s.items}>
            {prods.map((e)=>(
                <Item key={e.id}  model={e.Model} memory={e.Memory} price={e.Price}/>
            ))}
        </div>
    )
}

export default ItemList;