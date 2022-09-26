import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import products from '../Utils/products';



function ItemDetailContainer() {

    const [product, setProduct] = useState({});
    const {id} = useParams()

    useEffect(() => {
      const promiseProduct = new Promise ((res, rej) => {
        setTimeout(()=>{
          res(products)
        }, 0)
      })
      promiseProduct.then(resp => setProduct(resp => products.find(products => products.id === id)))
    }, [id])


  return (
    <div>
        <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer