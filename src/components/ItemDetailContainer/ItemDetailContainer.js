import ItemDetail from '../ItemDetail/ItemDetail';
import getData from '../../helpers/getData'
import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(() => {

        setLoading(true)

        getData()
            .then((res) => {
                setItem( res.find((prod) => prod.id === Number(itemId)) )
            })
            .catch((err) => {  console.log(err)})
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

  return (
    <div>
        {loading ?  <h2>Cargando...</h2> : <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer