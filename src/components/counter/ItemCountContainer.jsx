import React, { useState } from "react";
import ItemCount from "./ItemCount";


function ItemCountContainer ({stock}) {
    const [count, setCount] = useState (1);

    function add () {
        if(count < stock){
            setCount(count + 1);
        } else {
            alert('Maximo de productos posible')
        }
    }

    function dec () {
        if(count >= 1) {
            setCount(count - 1)
        } else {
            alert('Ya no quedan productos por sacar')
        }
    }

    function onAdd () {
        alert(`Agregaste ${count} a tu carrito`)
    }

    return(
        <div>
            <ItemCount count={count} add={add} dec={dec} onAdd={onAdd}/>
        </div>
    )
}

export default ItemCountContainer;