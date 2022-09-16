import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productName } = useParams();
  return <div>this is details {productName}</div>;
};

export default ProductDetail;
