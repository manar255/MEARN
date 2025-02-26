import {useEffect, useState } from "react";
import ProductCard from "./productCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => console.log(data) || setProducts(data));
      
  }, []);

  return (
    <>
      <div className="containar  ">
        <div className="d-flex flex-wrap gap-3 justify-content-center p-5 "> 
          {products.map((product) => (
           <>
            <ProductCard key={product.id} product={product}/>
           </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
