import React, { useEffect, useState } from "react";
import "./Home.css";
import banner from "../../../images/bannerbackground.png";
import { Form, InputGroup } from "react-bootstrap";
import Products from "../Products/Products";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState([]);
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
  };
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const match = data.filter((pd) =>
          pd.name.toLowerCase().includes(searchText)
        );
        setSearch(match);
      });
  }, [searchText]);
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  // const handleChange = (e) => {
  //   setSearch(products);
  //   const value = e.target.value;
  //   const match = products.filter((pd) =>
  //     pd.name.toLowerCase().includes(value)
  //   );
  //   setSearch(match);
  // };
  // const searchBtn = (e) => {

  //   console.log(searchInput, "search");
  // };
  return (
    <div className="home">
      <div className="banner d-block m-auto" style={bannerStyle}>
        <div className="inner-banner d-flex align-items-center">
          <h1>Best Foods Are Waiting For You</h1>
          <InputGroup className="mb-3" style={{ width: "40%" }}>
            <Form.Control
              placeholder="Search Food Items"
              className="rounded-pill search-input"
              onChange={handleChange}
            />
            <InputGroup.Text
              id="basic-addon2"
              className="rounded-pill bg-danger text-white search-btn"
              // onClick={() => searchBtn()}
            >
              Search
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <Products search={search} setSearch={setSearch} />
    </div>
  );
};

export default Home;
