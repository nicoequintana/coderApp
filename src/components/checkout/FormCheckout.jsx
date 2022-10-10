import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import s from '../Modules/formCheckout.module.css'

function FormCheckout({handleId}) {

    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    const { cart, finalPrice } = useContext(CartContext);


    const sendOrder = () => {
       
        const buyer = {nombre: nombre, mail:mail, telefono:telefono};
        const items = [];
        cart.forEach((item) => {
            items.push(item.id, item.name, item.cant, item.color);
        })
        const order = {buyer:buyer, items:items, date:serverTimestamp(), finalPrice:finalPrice()};
        console.log(order)
        const db = getFirestore();
        const op_clients = collection(db, 'op_clients');
        addDoc(op_clients, order).then((resp) => {
            handleId(resp.id);
        });
            
    }

  return (
    <div className={s.formCheckoutSite}>
        <div className={s.formContainer}>
            <form>
                <div className={s.formDates}>
                    <label for='nombre'>Nombre</label>
                    <input type='text' id='nombre' placeholder='Como te llamas?' onInput={(e) => setNombre(e.target.value)}/>
                </div>
                <div className={s.formDates}>
                    <label for='mail'>Mail</label>
                    <input type='text' id='apellido' placeholder='Dejanos tu mail' onInput={(e) => setMail(e.target.value)}/>
                </div>
                <div className={s.formDates}>
                    <label for='telefono'>Telefono</label>
                    <input type='text' id='telefono' placeholder='y tu numero de contacto?' onInput={(e) => setTelefono(e.target.value)}/>
                </div>
                <div className={s.formDates}>
                    <button type='button' className={s.formDatesBtn} onClick={sendOrder}>Generar Orden</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormCheckout