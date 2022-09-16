import axios from "axios";
import { useEffect, useState } from "react";

const UseProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("products.json").then((data) => setProducts(data.data));
  }, []);
  return [products, setProducts];
};

export default UseProduct;
