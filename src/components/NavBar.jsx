let menu = ['Tienda', 'Mac', 'Ipad', 'iPhone', 'Watch', 'Airpods', 'TV y Casa', 'Solo en Apple', 'Accesorios', 'Soporte']
const NavBar = () => {
    return(
        <nav>
            <h1>Loguito</h1>
            <ul>
                {menu.map( (item) => <li><a href="{#}">{item} </a></li>)}
            </ul>
        </nav>
    )
}

export default NavBar