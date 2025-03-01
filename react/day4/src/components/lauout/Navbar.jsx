import { NavLink } from "react-router-dom"
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className="bg-dark text-white p-3">
        <ul className="d-flex justify-content-start gap-4"> 
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Product</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/favorite'><li>Favorite</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar