import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/contacts";
import Products from "./components/products/products";
import { BrowserRouter, Router, Route } from "react-router-dom";
import  Navbar  from "./components/navbar/navbar";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Router>
          <Route path="/" component={Products} />
          <Route path="/contacts" component={Contacts} />
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
