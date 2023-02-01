import './navbar.css'
import CartWidget from './CartWidget'
let menu = ['Tienda', 'Mac', 'Ipad', 'iPhone', 'Watch', 'Airpods', 'TV y Casa', 'Solo en Apple', 'Accesorios', 'Soporte']

const NavBar = () => {
    return(
        <nav>
            <ul className='menu'>
                <a href='{#}'><i class="fa-brands fa-apple"></i> </a>
                {menu.map( (item) => <li><a href="{#}">{item} </a></li>)}
                <a href='{#}'>
                    <CartWidget carrito={[0]}/>
                </a>
            </ul>
        </nav>
    )
}

export default NavBar