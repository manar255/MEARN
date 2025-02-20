const ProductCard = ({product}) => {
    return (
      <>
        <div className="card align-items-start p-0" style={{ width: '18rem' }}>
          <img src={product.thumbnail||product.images[0]} className="card-img-top" alt="..." />
          <div className="card-body w-100 d-flex flex-column justify-content-between align-items-start"> 
            <h5 className="card-title ">
            {product.title}
            </h5>
            <div className="text-danger">{product.price}</div>
            <p className="card-text">
               product.description
            </p>
            {product.stock > 10 ?<a href="#" className="btn btn-primary">
              pay now
            </a>:<a href="#" className="bg-danger badge"> 
             out of stock
            </a>}
          </div>
        </div>
      </>
    );
  };
  
  export default ProductCard;