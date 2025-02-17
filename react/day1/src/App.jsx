import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/header.jsx";
import Main from "./components/main/main.jsx";
import Footer from './components/footer/footer.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
