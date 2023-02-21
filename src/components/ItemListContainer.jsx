import { useEffect, useState } from "react"
import productos from "../data/products.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(()=> {
                resolve(id ? productos.filter(producto => producto.categoria === id) : productos)
            }, 2000)
        })
        promesa.then((response) => {
            setProducts(response)
        })
    }, [id])

    return(
       <div>
        <h1>ItemListContainer</h1>
        <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer