import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../asyncmock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [products, setProducts] =  useState([]);

    const {idCategory} = useParams(); 

    // useEffect( ()=> {
    //     const productFunction= idCategory ? getProductsByCategory : getProducts;
    //     productFunction(idCategory)
    //         .then ( answer => setProducts(answer))
    // },[idCategory])

    useEffect(() => {
        console.log("ID de categoría desde useParams:", idCategory); // 👀 Verificar qué devuelve useParams()
    
        const productFunction = idCategory ? getProductsByCategory : getProducts;
    
        productFunction(idCategory)
            .then(answer => {
                console.log("Productos obtenidos:", answer); // 👀 Verificar si getProductsByCategory se ejecuta
                setProducts(answer);
            });
    
    }, [idCategory]);

  return (
    <div className="card-container">
        <ItemList products= {products}/>
    </div>
  )
}

export default ItemListContainer