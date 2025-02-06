import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../asyncmock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [products, setProducts] =  useState([]);

    const {idCategory} = useParams(); 

    useEffect( ()=> {
        const productFunction= idCategory ? getProductsByCategory : getProducts;
        productFunction(idCategory)
            .then ( answer => setProducts(answer))
    },[idCategory])

  return (
    <div className="card-container">
        <ItemList products= {products}/>
    </div>
  )
}

export default ItemListContainer