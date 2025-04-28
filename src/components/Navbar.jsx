import "../css/Navbar.css"
import CartWidget from "./CartWidget"

const Navbar = ()=>{
    return(
        <nav className="nav-container">
            <div className="logo">
                <h2>Coralia</h2>
                <h3>Belleza y confort</h3>
            </div>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Productos</a></li>
                <li><a href="">Ofertas</a></li>
                <li><a href="">Contactanos</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar