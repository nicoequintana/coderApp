import React, { useState } from 'react';
import FormCheckout from './FormCheckout';
import s from '../Modules/checkout.module.css'
import { Link } from 'react-router-dom';


function Checkout() {

    const [orderId, setOrderId] = useState('');

    const handleId = (ordenNumber) => {
        setOrderId(ordenNumber)
    }

    if(orderId) {
        return (
            <div className={s.success}>
                <div className={s.successContainer}>
                    <div className={s.successLogo}>
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Apple_gray_logo.png/800px-Apple_gray_logo.png'} alt={'logo de la empresa'} />
                    </div>
                    <div className={s.successMessage}>
                        <p>
                            Gracias por tu compra, tu numero de ID es: <b>{orderId}</b>
                        </p>
                    </div>
                    <Link to='/'><button className={s.successBtn} type='button'>Finalizar</button></Link>
                </div>
            </div>
        )
    }

  return (
    <div >
        <FormCheckout handleId={handleId}/>
    </div>
  )
}

export default Checkout