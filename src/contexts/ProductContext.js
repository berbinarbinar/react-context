import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [jokowiObj, setJokowiObj] = useState({
    url: "https://cdn-brilio-net.akamaized.net/news/2017/12/28/136783/thumbnail-7-momen-jokowi-sukses-curi-perhatian-di-tahun-2017-171228c.jpg",
    title: "Bapakku lagi mancing",
    desc: "Iya bapakku lagi mancing di laut seru bgt",
  });

  const value = { jokowiObj, setJokowiObj };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductContext, ProductProvider, useProduct };
