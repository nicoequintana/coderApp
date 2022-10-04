import React, { useState } from 'react';
import FormCheckout from './FormCheckout';
import s from '../Modules/checkout.module.css'


function Checkout() {

    const[orderId, setOrderId] = useState('');

    const handleId = (ordenNumber) => {
        setOrderId(ordenNumber)
    }

    if(orderId) {
        return (
            <div className={s.success}>
                gracias por tu compra, tu numero de ID es: <b>{orderId}</b>
            </div>
        )
    }

  return (
    <div className={s.checkoutSite}>
        <FormCheckout handleId={handleId}/>
    </div>
  )
}

export default Checkout