import { Route, Routes } from "react-router-dom";
import App from "./pages/Home";
import Products from "./pages/Products";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
