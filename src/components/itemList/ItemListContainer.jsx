import React from "react";
import s from './itemList.module.css'

function ItemListContainer () {

    return(
        <>
            <div className={s.containerCenter}>
                <h1 className={s.itemListStyle}>
                    Esto va a ser un ecommerce de Apple
                </h1>
            </div>
        </>
    )
}

export default ItemListContainer;