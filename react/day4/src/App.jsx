import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/lauout/Layout";
// import Products from "./components/Products/Products";
import About from "./components/About/About";
// import Favirate from "./components/Favorite/Favorite";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/lauout/Navbar";
import Product from "./components/product/product";
import Wishlist from "./components/Wishlist/Wishlist";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import NotFound from "./components/NotFound/NotFound";
import React, { lazy } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Signup from "./components/Signup/Signup";
import Contact from "./components/Contact/Contact";

const Products = lazy(() => import("./components/Products/Products"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/favorite",
          element: <ProtectedRoute />,
          children: [
            {
              path: "",
              element: <Wishlist />,
            },
          ],
        },{
          path: "/cart",
          element: <ProtectedRoute />,
          children: [
            {
              path: "",
              element: <Cart />,
            },
          ],
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return (
    // <BrowserRouter>
    //   <Layout>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/products" element={<Products />} />
    //       <Route path="/products/:id" element={<Product />} />
    //       <Route path="/favorite" element={<Wishlist />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="*" element={<h1>Not Found</h1>} />
    //     </Routes>
    //   </Layout>
    // </BrowserRouter>
   
        <RouterProvider router={router} />
     
  );
}

export default App;
