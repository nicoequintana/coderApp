import React, { useState } from "react";
import s from '../Modules/count.module.css'

function ItemCountContainer ({stock, onAdd, initial}) {
    const [count, setCount] = useState (initial);
    
    function add () {
        count < stock && setCount(count + 1)
    }

    function dec () {
        count > initial && setCount(count - 1)
    }



    return(
        <div className={s.counterContainer}>
            <div className={s.counter}>
                <button className={s.btnCounterDec} onClick={() => {dec()}}>-</button>
                <p className={s.countHolder}>{count}</p>
                <button className={s.btnCounterAdd} onClick={() => {add()}}>+</button>
            </div>
            <button className={s.addToCart} onClick={() => onAdd(count)}>Agregar</button>
        </div>
    )
}

export default ItemCountContainer;