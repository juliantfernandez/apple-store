import './navbar.css'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
let menu = [ 'Macbook', 'Ipad', 'iPhone', 'Watch', 'Airpods', 'TV y Casa', 'Solo en Apple', 'Accesorios']



const NavBar = () => {
    return(
        <nav>
            <ul className='menu'>
                <Link to={'/'}><i class="fa-brands fa-apple"></i> </Link>
                {menu.map( (item) =>
                    <li key={item}>
                         <NavLink to={`/${item}`}>{item} </NavLink>
                    </li>)}
                <a href='{#}'>
                    <CartWidget carrito={[0]}/>
                </a>
            </ul>
        </nav>
    )
}

export default NavBar