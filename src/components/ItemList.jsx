import Item from "./Item"
const ItemList = ({products}) => {
    return(
        <div> 
        {products.map(producto => (
            <div key={producto.id}> 
                <Item producto={producto}/>
                </div>
           
        ))}
         </div>
    )
    
}

export default ItemList