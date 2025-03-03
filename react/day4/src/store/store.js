import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "./slices/authSlices";
import  productsReducer  from "./slices/productSlices";
import  wishlistReducer  from "./slices/wishlistSlices";
import  cartReducer  from "./slices/cartSlices";


export default configureStore({
  reducer: {
    auth:authReducer,
    products:productsReducer,
    wishlist:wishlistReducer,
    cart:cartReducer,
  },
});
