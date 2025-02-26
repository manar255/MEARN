import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Layout from "./components/lauout/Layout";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Favirate from "./components/Favorite/Favorite";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/lauout/Navbar";
import Product from "./components/product/product";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  return (
      <BrowserRouter>
     <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/favorite" element={<Wishlist />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        </Layout>
      </BrowserRouter>
    
  );
}

export default App;
