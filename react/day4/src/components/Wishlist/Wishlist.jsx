import React, { use, useEffect, useState } from "react";
import ProductCard from "../Products/productCard";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";


const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  let navigate = useNavigate();

  let handleAddToFavorite = () => {
    fetch(`http://localhost:3000/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    
  }
  useEffect(() => {
    fetch("http://localhost:3000/wishlist")
      .then((res) => res.json())
      .then((data) => console.log(data) || setWishlist(data));
  }, []);

  return (
    <div className="p-5">
      {wishlist.map((product) => (
        <>
          <div
            className=" d-flex align-items-center gap-3 border  "
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            <img src={product.image} className="img-fluid col-3" />
            <div className="py-3 px-2 col-4 d-flex gap-2 ">
              <div className="d-flex flex-column align-items-start">
                <h5>{product.title}</h5>
                <h5 className="badge text-danger p-1">{product.price}</h5>
              </div>
             
            </div>
            <span
              className="position-absolute bg-light rounded-circle p-2"
              onClick={() => handleAddToFavorite(product)}
            >
              <CiHeart />
            </span>
          </div>
        </>
      ))}
    </div>
  );
};

export default Wishlist;
