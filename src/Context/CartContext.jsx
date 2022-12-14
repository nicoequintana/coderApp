import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([])
    
    const addToCart = (item, cant) => {
        const product = {...item, cant};
        if(isInCart(product.id)) {
            sumarCantidad(product)
        } else {
            setCart([...cart, product])
        }
    }

    const isInCart = (id) => cart.some((e) => e.id === id);
    
    const sumarCantidad = (product) => {
        const cartUpdate = cart.map((productInCart) => {
            if (product.id === productInCart.id){
                const productUpdate = {
                    ...productInCart, 
                    cant: productInCart.cant + product.cant
                }
                return productUpdate;
            } else {
                return productInCart
            }
        })


        setCart(cartUpdate)
    }

    //funcion para deletear el estado cart(carrito)
    const deleteAll = () => {
        setCart([]);
    }

    //funcion para borrar un producto
    const deleteOne = (id) => {
        let cartCopy = [...cart]
        const cartUpdate = cartCopy.filter((e) => e.id !== id);
        //console.log(cartUpdate)
        setCart(cartUpdate)
    }

    //funcion para sumar todos los productos que tengo en el carrito.
    const totalProducts = () => {
        let cartCopy = [...cart];
        let totalCount = 0;
        cartCopy.forEach((e)=>{
            totalCount += e.cant
        })

        //console.log(totalCount)
        return totalCount;
        
    }


    //funcion para sumar todos los montos y obtener el total.
    const finalPrice = () => {
        let cartCopy = [...cart];
        let totalPrice = 0;
        cartCopy.forEach((e)=>{
            totalPrice += e.price * e.cant
        })
        //console.log(totalPrice)
        return totalPrice
    }

    console.log(cart)

    return(
        <CartContext.Provider value={{addToCart, deleteAll, totalProducts, finalPrice, deleteOne, cart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;