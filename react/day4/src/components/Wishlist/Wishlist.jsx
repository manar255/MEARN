import React, { use, useEffect, useState } from "react";
import ProductCard from "../Products/productCard";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setWishlist } from "../../store/slices/wishlistSlices";
import { FaHeart } from "react-icons/fa6";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  let navigate = useNavigate();
  let dispatch = useDispatch()

  let handleAddToFavorite = async(event,product) => {
    event.stopPropagation();
    const res = await fetch('http://localhost:3000/wishlist');
    const wishlist=await res.json();
    const item=wishlist.find(i=>i.id==product.id);
    console.log(item);
    
    if(item){
      await fetch(`http://localhost:3000/wishlist/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
    }else{
      await fetch(`http://localhost:3000/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
    }

    fetch("http://localhost:3000/wishlist")
      .then((res) => res.json())
      .then((data) => console.log(data) || dispatch(setWishlist(data)));

  }
  useEffect(() => {
    fetch("http://localhost:3000/wishlist")
      .then((res) => res.json())
      .then((data) => console.log(data) || dispatch(setWishlist(data)));
  }, []);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-5 ">
      <div className="col-8 d-flex flex-column justify-content-center align-items-center gap-3">

      {wishlist.map((product, index) => (
        
          <div
            key={index}
            className=" d-flex align-items-center gap-3 border position-relative "
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
              className="position-absolute bg-light rounded-circle p-2  text-danger d-flex align-items-center justify-content-center border"
              style={{width: '30px',height:'30px',top:'10px',right:'10px'}}
              onClick={(event) => handleAddToFavorite(event,product)}
            >
              <FaHeart />
            </span>
            
          </div>
        
      ))}
      </div>

    </div>
  );
};

export default Wishlist;
