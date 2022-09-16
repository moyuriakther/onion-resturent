import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  let navigate = useNavigate();
  const { img, name, price, category } = product;
  const handleDetail = () => {
    navigate(`/productDetail/${category}/${name}`);
    console.log("Product detail");
  };
  return (
    <Col
      className="mb-4 d-flex justify-content-center custom-card "
      md={4}
      sm={6}
      onClick={handleDetail}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img height="250px" variant="top" src={img} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <b>${price}</b>
          </Card.Text>
          <Card.Text> Lorem ipsum dolor sit amet. </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
