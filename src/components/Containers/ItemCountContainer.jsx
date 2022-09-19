import React, { useState } from "react";
import ItemCount from '../counter/ItemCount';

function ItemCountContainer ({stock, onAdd}) {
    const [count, setCount] = useState (1);
    //const [validateShopping, setValidateShopping] = useState(false)
    
    //este console.log me tira undefined
    //console.log(stock)

    
    function add () {
        if(count < stock){
            setCount(count + 1);
        } else {
            alert('Maximo de productos posible')
        }
    }

    function dec () {
        if(count > 1) {
            setCount(count - 1)
        } else {
            alert('Ya no quedan productos por sacar')
        }
    }



    return(
        <ItemCount stock={stock} count={count} onAdd={onAdd} add={add} dec={dec}/>
    )
}

export default ItemCountContainer;