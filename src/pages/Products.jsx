import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";
import { ProductContext } from "../contexts/ProductContext";

export default function Products() {
  const navigate = useNavigate();
  const productsJkw = useContext(ProductContext);
  // const jokowiMancing =
  //   "https://cdn-brilio-net.akamaized.net/news/2017/12/28/136783/thumbnail-7-momen-jokowi-sukses-curi-perhatian-di-tahun-2017-171228c.jpg";

  return (
    <>
      <div style={{ display: "flex" }}>
        <h1 onClick={() => navigate("/")}>Home | </h1>
        <h1> Products Details Page</h1>
      </div>
      <ProductCard
        desc={productsJkw.desc}
        title={productsJkw.title}
        url={productsJkw.url}
      />
    </>
  );
}
