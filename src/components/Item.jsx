import { Link } from "react-router-dom"
const Item = ({producto}) => {
    return(
        <Link to={"/item/"+ producto.id}> 
        <div>
            <h1>
                {producto.nombre}
            </h1>
        </div>
        </Link>
    )
}

export default Item