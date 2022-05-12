import logo from "../logo.svg";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

function App() {
  const contextObj = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/products">
          <button type="button">products</button>
        </Link>

        <br />
        <button onClick={() => navigate("/products")}>pindah kemana</button>
      </header>
      <div>
        <ProductCard
          desc={contextObj.desc}
          url={contextObj.url}
          title={contextObj.title}
        />
      </div>
    </div>
  );
}

export default App;
