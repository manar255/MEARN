import React from "react";
import "./main.css";

const main = () => {
  return (
    <main>
      <div className="hero">
        <h1>Select your new perfect Style</h1>
        <button className="gray-btn">SHOP NOM</button>
      </div>
      <div className="products">
        <h1>New Arrivals</h1>
        <div className="cards">
            <div className="card">
                <img src="./Images/product1.png" alt="" />
                <h5>Thermo ball etip Gloves</h5>
                <p>$ 45.88</p>
            </div>
            <div className="card">
                <img src="./Images/product2.png" alt="" />
                <h5>Thermo ball etip Gloves</h5>
                <p>$ 45.88</p>
            </div>
            <div className="card">
                <img src="./Images/product3.png" alt="" />
                <h5>Thermo ball etip Gloves</h5>
                <p>$ 45.88</p>
            </div>
            
        </div>
      </div>
    </main>
    
  );
};

export default main;
