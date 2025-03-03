import React, { useState } from "react";
import img_path from "../../assets/Sign in-pana.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../store/slices/authSlices";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    const res = await fetch(`http://localhost:3000/users`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const users = await res.json();

    let user = users.find((u) => u.email == userData.email);
    let isValid = user && user.password == userData.password;
    if (isValid) {
      dispatch(setIsAuth(true));
      navigate("/");
    }
  };
  return (
    <>
      <div className="container justify-content-center align-items-center d-flex">
        <div className="row justify-content-center align-items-center col-9">
          <div className="col-7">
            <img src={img_path} alt="" className="img-fluid" />
          </div>
          <div className="col-5">
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <h1>Sign up</h1>

                <div className="d-flex flex-column gap-3 col-12">
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="name@example.com"
                      value={userData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={userData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-dark btn-lg">
                  Sign up
                </button>
                <p>You don't have account <NavLink to='/signup'>Sign up</NavLink> </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
