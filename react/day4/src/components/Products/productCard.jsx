// import { use, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { setWishlist } from "../../store/slices/wishlistSlices";
import { useDispatch } from "react-redux";

function ProductCard({ product, isFavorate }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let handleAddToFavorite = async (event, product) => {
    event.stopPropagation();
    const res = await fetch("http://localhost:3000/wishlist");
    const wishlist = await res.json();
    const item = wishlist.find((i) => i.id == product.id);
    console.log(item);

    if (item) {
      await fetch(`http://localhost:3000/wishlist/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
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
  };
  let getCart = async () => {
    let res = await fetch("http://localhost:3000/cart");
    return await res.json();
  };
  let handleAddToCart = async(e, product) => {
    e.stopPropagation();
    let cart=await getCart();
    let item = cart.find(i=>i.id==product.id);
    if(item){
      await fetch(`http://localhost:3000/cart/${item.id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...item,quantity:item.quantity+1}),
      });
    }
    else{
      await fetch(`http://localhost:3000/cart`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...product,quantity:1}),
      });
    }
  };

  return (
    <>
      <div
        className="col-3 d-flex flex-column align-items-center gap-3 border position-relative"
        onClick={() => {
          navigate(`/products/${product.id}`);
        }}
      >
        <img src={product.image} className="img-fluid" />
        <div className="py-3 px-2 col-12 d-flex flex-column gap-2">
          <div className="d-flex flex-column align-items-start">
            <h5>{product.title}</h5>
            <h5 className="badge text-danger p-1">{product.price}</h5>
          </div>
          <button
            className="btn btn-dark align-self-center d-flex align-items-center gap-2"
            onClick={(e) => handleAddToCart(e, product)}
          >
            Add to Cart <CiShoppingCart />
          </button>
        </div>
        {isFavorate ? (
          <span
            className="position-absolute bg-light rounded-circle p-2 d-flex align-items-center justify-content-center heart-pos border text-danger"
            style={{ width: "30px", height: "30px" }}
            onClick={(event) => handleAddToFavorite(event, product)}
          >
            <FaHeart />
          </span>
        ) : (
          <span
            className="position-absolute bg-light rounded-circle p-2 d-flex align-items-center justify-content-center heart-pos"
            style={{ width: "30px", height: "30px" }}
            onClick={(event) => handleAddToFavorite(event, product)}
          >
            <CiHeart />
          </span>
        )}
      </div>
    </>
  );
}

export default ProductCard;
