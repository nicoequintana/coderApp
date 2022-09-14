import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'



function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const {category, id} = useParams();

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${category}`)
        .then((res)=>res.json())
        .then((data) => {
            console.log(data.results)
            const item = data.results.find((prod) => prod.id === id)
            console.log(item)
            setProduct(item)
        })
        .catch((err)=>console.log(err))
    }, [category, id])


  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer