import React, { createContext } from "react";

export const Cart = createContext();

const CartProvider = ({children}) => {


 

    return(
        <Cart.Provider>
            {children}
        </Cart.Provider>
    )
}

export default CartProvider;