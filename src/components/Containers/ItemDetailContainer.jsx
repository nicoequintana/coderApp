import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'



function ItemDetailContainer() {

    const [product, setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((res)=>res.json())
        .then((data) => {
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