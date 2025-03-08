import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth } from "../../store/slices/authSlices";
import logo_path from "../../assets/logo.png";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  let handleLogout = () => {
    dispatch(setIsAuth(false));
  };
  return (
    <nav className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-start align-items-center gap-3">
      <NavLink to="/"> <img src={logo_path}className="img-fluid" width={70} /></NavLink>
        <ul className="d-flex justify-content-start gap-4 m-0">
          <NavLink to="/"  className={({ isActive }) => (isActive ? "active-link" : "")}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <li>Product</li>
          </NavLink>
          <NavLink to="/favorite" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <li>Favorite</li>
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <li>Contact us</li>
          </NavLink>
          <NavLink to="/about"className={({ isActive }) => (isActive ? "active-link" : "")}>
            <li>About</li>
          </NavLink>
        </ul>
      </div>
      <div className="d-flex gap-4 fs-4 pe-3">
        <NavLink to="/cart">
          <span>
            <CiShoppingCart />
          </span>
        </NavLink>
        {isAuth ? (
          <span
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            className="position-relative"
          >
            <CiUser />
            <div
              className="collapse position-absolute"
              style={{ right: "-40px", top: "45px" }}
              id="collapseExample"
              onClick={handleLogout}
            >
              <div className="bg-secondary p-1 px-3 rounded fs-5 d-flex align-items-center justify-content-center gap-2">
                <CiLogout />
                logout
              </div>
            </div>
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
