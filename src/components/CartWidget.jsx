const CartWidget = (props) => {
    return(
        <div className="cartWidget">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>{props.carrito[0]}</p>
        </div>
    )
}

export default CartWidget