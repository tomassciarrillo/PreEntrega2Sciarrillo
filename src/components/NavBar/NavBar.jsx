import "./NavBar.css"
import { Link,NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
        <Link to="/" className="title-link">
            <div className="title-img-container">
                <h1 className="header-title"> Tienda Potrero </h1>
                <img src="https://cdn-icons-png.flaticon.com/128/3333/3333673.png" alt="icon-fotball-player"  className="header-img"/>
            </div>
        </Link>

        <nav>
            <ul className="nav-links">
                <li> <NavLink to="/category/botines" className="nav-links-li"> Botines </NavLink> </li>
                <li> <NavLink to="/category/camisetas" className="nav-links-li"> Camisetas </NavLink> </li>
                <li> <NavLink to="/category/accesorios" className="nav-links-li"> Accesorios </NavLink> </li>
            </ul>
        </nav>
        <button className="btn-contact">Contacto</button>
    </header>
  )
}

export default NavBar

