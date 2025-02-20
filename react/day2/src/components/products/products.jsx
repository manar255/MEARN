import { useEffect, useState } from "react";
import ProductCard from "./productCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);
  console.log(products);

  return (
    <div className="containar  ">
      <div className="d-flex flex-wrap gap-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
