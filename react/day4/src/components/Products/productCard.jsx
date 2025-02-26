// import { use, useEffect } from "react";


import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";


function ProductCard({product} ) {

  let navigate = useNavigate();
  let handleAddToFavorite = (event) => {
    event.stopPropagation();
    fetch(`http://localhost:3000/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

  }


 
  return (
    <>
      <div className="col-3 d-flex flex-column align-items-center gap-3 border position-relative" onClick={() => {navigate(`/products/${product.id}`)}} >
        <img src={product.image} className="img-fluid" />
        <div className="py-3 px-2 col-12 d-flex flex-column gap-2">
          <div className="d-flex flex-column align-items-start">
            <h5>{product.title}</h5>
            <h5 className="badge text-danger p-1">{product.price}</h5>
          </div>
          <button className="btn btn-dark align-self-center">Add to Cart</button>
        </div>
          <span className="position-absolute bg-light rounded-circle p-2 d-flex align-items-center justify-content-center heart-pos" style={{width: '30px',height:'30px'}} onClick={(event)=>handleAddToFavorite(event,product)}><CiHeart /></span>
      </div>
    </>
  );
}

export default ProductCard;
