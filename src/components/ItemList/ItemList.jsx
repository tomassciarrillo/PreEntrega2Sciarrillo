import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({products}) => {
  return (
    <div className='card-container'>
        {
            products.map ( producto => <Item key={producto.id} {... producto}/> )
        }
    </div>
  )
}

export default ItemList