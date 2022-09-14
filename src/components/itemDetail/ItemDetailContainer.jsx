import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'



function ItemDetailContainer() {

    const [product, setProduct] = useState({});
    const {id} = useParams()

    console.log(id)

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((res)=>res.json())
        .then((data) => {
            console.log(data) //no lo veo en consola. No se levanta el componente
            // const item = data.find((prod) => prod.id === id)
            setProduct(data)
        })
        .catch((err)=>console.log(err))
    }, [id])


  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer