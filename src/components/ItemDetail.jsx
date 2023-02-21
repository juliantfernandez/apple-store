import ItemCount from './ItemCount'
const ItemDetail = ({items}) => {
    return(
        <div>
            <h1>{items.nombre}</h1>
            <p>{items.precio}</p>
            <ItemCount stock={items.stock}/>
        </div>
    )
}

export default ItemDetail