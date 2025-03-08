import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  let { id } = useParams();
  let [Product, setProduct] = useState({ sizes: [], availableSizes: [] });
  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data) || setProduct(data));

  }, []);

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
    
    <div className="row py-3">
      <div className="col-5">
        <img src={Product.image} alt="" className="w-100" />
      </div>
      <div className="col-5 d-flex flex-column gap-5 justify-content-center ">
        <div>
          <h1>{Product.title}</h1>
          <h3 className="text-danger">{Product.price}</h3>
        </div>
       <div>
       <h5 className="text-secondary d-flex flex-column gap-2 ">Sive : </h5>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          {Product.sizes?.map((s, i) => (
            <button
              key={i}
              className={`btn ${
                Product.availableSizes.includes(s)
                  ? "btn-primary"
                  : "btn-secondary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
       </div>
        <p className="text-end">{Product.description}</p>
        <button className="btn btn-dark " onClick={(e)=>handleAddToCart(e, Product)} >Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
