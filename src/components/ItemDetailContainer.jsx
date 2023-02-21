import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import products from '../data/products.json'
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    
    const [items, setItems] = useState({})
    const {id} = useParams()

    useEffect(()=> {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products.find(product => product.id === parseInt(id)))
            }, 2000)
        })
        promesa.then((response) => {
            setItems(response)
        })
    }, [id])

    return(
        <div>
            <ItemDetail items={items}/>
        </div>
    )
}

export default ItemDetailContainer