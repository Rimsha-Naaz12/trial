import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import API from "./services/api";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await API.get("/");
    setProducts(res.data);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  const addProducts = async (data) => {
    const res = await API.post("/", data);
    fetchData();
  };

  const deleteProduct = async (id) => {
    const res = await API.delete(`/${id}`);
    fetchData();
  };

  return (
    <div>
      <h1>Simple MERN Ecom Full Stack</h1>
      <ProductForm addProducts={addProducts} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default App;