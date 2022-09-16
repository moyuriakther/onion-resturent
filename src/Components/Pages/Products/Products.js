import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import UseProduct from "../../hooks/UseProduct";
import Product from "./Product";

const Products = ({ search, setSearch }) => {
  const [products] = UseProduct();
  // change food items by clicking menu
  const handleItemChange = (item) => {
    const changeItem = products.filter((pd) => pd.category === item);
    setSearch(changeItem);
  };
  return (
    <div>
      <ul className="home-menu my-5 d-flex justify-content-center">
        <li onClick={() => handleItemChange("breakfast")}>Breakfast</li>
        <li onClick={() => handleItemChange("lunch")}>Lunch</li>
        <li onClick={() => handleItemChange("dinner")}>Dinner</li>
      </ul>
      <Container>
        <Row>
          {search?.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Row>
      </Container>
      <div className="d-flex justify-content-center my-3">
        <Button variant="secondary">Checkout Your Food</Button>
      </div>
    </div>
  );
};

export default Products;
