import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <nav className="bg-dark text-white p-4 d-flex justify-content-between align-items-center">
      <ul className="d-flex justify-content-start gap-4 m-0">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Product</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact us</li>
        </NavLink>
        <NavLink to="/favorite">
          <li>Favorite</li>
        </NavLink>
      </ul>
      <div className="d-flex gap-3 fs-4">
        <NavLink to="/cart">
          <span>
            <CiShoppingCart />
          </span>
        </NavLink>
        {isAuth ? (
          <span>
            <CiUser />
          </span>
        ) : (
          <NavLink to="/login">
            <button className="btn btn-secondary">Login</button>
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
