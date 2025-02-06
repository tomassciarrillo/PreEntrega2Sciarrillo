import "./Item.css"
import { Link } from "react-router-dom"



const Item = ({id,name, price, img}) => {
  return (
      <div className="product-card">
        <img src={img} alt={name} className="img-card"/>
        <h3 className="title-card">{name}</h3>
        <p className="price-card">Precio: ${price}</p>
        <Link className="btn-card" to={`/item/${id}`}> Ver detalles </Link>
      </div>
  )
}

export default Item