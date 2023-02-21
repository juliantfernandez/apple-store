import { useState } from "react"
const ItemCount = ({stock}) => {

    const [items, setItems] = useState(1)
    const [itemStock, setItemStock] = useState(stock)

    const incrementarStock = () => {
        if(items < itemStock){
            setItems(items + 1)
        }
        
    }

    const decrementarStock = () => {
        if(items > 1){
            setItems(items - 1)
        }
        
    }

    const onAdd = () => {
        if(itemStock >= items){
            setItemStock(itemStock - items)
            setItems(1)
        }
    }

    return(
        <div>
            <button onClick={incrementarStock}>
                +
            </button>

            <p>{items}</p>

            <button onClick={decrementarStock}>
                -
            </button>
            <button onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount