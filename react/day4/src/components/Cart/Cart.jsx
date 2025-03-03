import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store/slices/cartSlices";

const Cart = () => {
  let cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const dispatch = useDispatch();

  let getCart = async () => {
    let res = await fetch("http://localhost:3000/cart");
    return await res.json();
  };
  useEffect(() => {
    getCart().then((data) => {
      dispatch(setCart(data));
    });
  }, []);
  const extractNumber = (priceString) => {
    const numberString = priceString.replace(/[^0-9.]/g, '');
    return parseFloat(numberString);
  };
  const totalPrice = useMemo(() => {
    let tmp = 0;
    cart.forEach((e) => {
      tmp += extractNumber(e.price)* e.quantity;
    });
    return tmp;
  }, [cart]);
  return (
    <>
      <div className="container my-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((c, i) => (
              <tr key={i} className="">
                <th scope="row">{i + 1}</th>
                <td>
                  <img
                    src={c.image}
                    className="img-fluid"
                    style={{ width: "200px" }}
                  />
                </td>
                <td>{c.title}</td>
                <td>{c.price}</td>
                <td>{c.quantity}</td>
              </tr>
            ))}

            <tr>
              <th scope="row"></th>
              <td colSpan="2" className="fs-3 text-danger">
                total price
              </td>
              <td colSpan="2" className="text-secondary">	EGP  {totalPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
