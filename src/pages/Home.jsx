import logo from "../logo.svg";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import { useContext, useState } from "react";
import { ProductContext, useProduct } from "../contexts/ProductContext";

function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // pakai useContext
  // const { jokowiObj, setJokowiObj } = useContext(ProductContext);

  // pakai custom hooks yang dibikin di file ProductContext
  const { jokowiObj, setJokowiObj } = useProduct();

  const handleFetch = async () => {
    const data = await fetch("http://urlnyaapa.com", {
      method: "GET",
    });
    if (data) {
      const fetchedData = data.json();
      setJokowiObj(fetchedData);
      setLoading(false);
    }
  };

  const gantiValueContext = () => {
    setJokowiObj({
      url: "http://google.com",
      title: "ini diganti",
      desc: "ini diganti juga",
    });
  };

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
          desc={jokowiObj.desc}
          url={jokowiObj.url}
          title={jokowiObj.title}
        />
      </div>

      {/* buat ganti value si context */}
      <button onClick={() => gantiValueContext()}> Ganti bang </button>
    </div>
  );
}

export default App;
