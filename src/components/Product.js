import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

const Product = ({ id, title, img, price, inCart }) => {
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          className="img-container p-5"
          onClick={console.log("you clickied me on the image container")}
        >
          <Link to="/details">
            <img src={img} alt="product"/>
          </Link>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;

const ProductWrapper = styled.div``;
