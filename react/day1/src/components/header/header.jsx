
import './header.css'
import React from "react";


const Header = () => {
  return (
    <header>
      <img src="./Images/logo.png" alt="" />
      <ul>
       <a href="#"> <li>Home</li></a>
       <a href="#"> <li>About</li></a>
       <a href="#"> <li>Contact</li></a>
      </ul>
    </header>
  );
};

export default Header;
