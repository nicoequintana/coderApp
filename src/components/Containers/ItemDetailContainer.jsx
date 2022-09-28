import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { doc, collection, getDoc } from 'firebase/firestore'
import ItemDetail from '../itemDetail/ItemDetail';
import {db} from '../../firebaseConfig.js';



function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const prodCollection = collection(db, 'products');
    const ref = doc(prodCollection, id);
    getDoc(ref).then((resp) => {
      console.log(resp.data())
      setProduct({id:resp.id, ...resp.data()})
    })
  }, [id]);


  return (
    <div>
        <ItemDetail product={product} />
    </div>
  );
};
export default ItemDetailContainer