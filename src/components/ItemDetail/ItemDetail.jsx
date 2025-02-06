import "./ItemDetail.css"

const ItemDetail = ({name, price, img,id,desc}) => {
  return (
    <div className='item-container'>
        <h3>{name}</h3>
        <h3>Precio: ${price}</h3>
        <p>{desc}</p>
        <img src={img} alt={name} />
    </div>
  )
}

export default ItemDetail