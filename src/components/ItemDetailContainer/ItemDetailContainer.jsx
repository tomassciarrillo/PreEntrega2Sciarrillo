import { getOneProduct } from "../asyncmock"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
  
    const [product, setProduct]= useState(null)

    const {idItem} = useParams();

    useEffect ( () => {
        getOneProduct(idItem)
            .then( answer => setProduct(answer))
    },[idItem])
  
    return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer