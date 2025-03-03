import {useEffect, useState } from "react";
import ProductCard from "./productCard";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../store/slices/productSlices";

const Products = () => {
  // console.log(useSelector(state=>state.products.items));
  
  const products = useSelector(state=>state.products.items)||[]
  const wishlist = useSelector(state=>state.wishlist.wishlist);
  const dispatch =useDispatch()
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) =>  dispatch(setItems(data)));
      
  }, []);

  return (
    <>
      <div className="containar  ">
        <div className="d-flex flex-wrap gap-3 justify-content-center p-5 "> 
          {products.map((product) => (
           <>
           {wishlist.find(i => i.id === product.id) ? (
              <ProductCard key={product.id} product={product} isFavorate={true} />
            ) : <ProductCard key={product.id} product={product} isFavorate={false} />}
           </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
