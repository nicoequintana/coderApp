import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import articles from '../Utils/products';



function ItemDetailContainer() {

    const [article, setArticle] = useState({});
    const {id} = useParams()

    useEffect(() => {
      const promiseProduct = new Promise ((res, rej) => {
        setTimeout(()=>{
          res(articles)
        }, 0)
      })
      promiseProduct.then(resp => setArticle(resp => articles.find(articles => articles.id === id)))
    }, [id])


  return (
    <div>
        <ItemDetail article={article} />
    </div>
  )
}

export default ItemDetailContainer