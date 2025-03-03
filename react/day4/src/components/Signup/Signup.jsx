import React, { useState } from "react";
import img_path from "../../assets/Sign up-rafiki.png";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate= useNavigate()
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(userData);
    const res =await fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    navigate('/login');
    
    
  };

  return (
    <>
      <div className="container justify-content-center align-items-center d-flex">
        <div className="row justify-content-center align-items-center col-9">
          <div className="col-5">
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                <h1>Sign up</h1>

                <div className="d-flex flex-column gap-3 col-12">
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First Name"
                      value={userData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <label className="form-label fs-5">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last Name"
                      value={userData.lastName}
                      onChange={handleChange}
                    />
                  </div>
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
                <button type="submit" className="btn btn-dark btn-lg">Sign up</button>
                <p>You already have account <NavLink to='/login'>Login</NavLink> </p>
              </div>
            </form>
          </div>
          <div className="col-7">
            <img src={img_path} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;