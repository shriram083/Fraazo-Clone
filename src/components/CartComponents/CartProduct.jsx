import React from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/react";
const CartFlex = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
`;
const ImageDiv = styled.div`
  border-radius: 4px;
  background: #f9f9f9;
  border: 1px solid #eee;
  padding: 5px;
  & img {
    display: block;
    height: 100%;
  }
`;
const HeadingFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h1 {
    font-size: 13px;
    font-weight: 450;

    line-height: 15px;
  };
  & p{
    font-size: 13px
    font-weight: 400

    line-weight: 17px
  };
  & h2{
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
  }
`;
const RemoveFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h1 {
    font-size: 12px;
    font-weight: 400;
    text-decoration: underline;

    line-height: 15px;
    text-align: right;
  }
  & h2 {
    font-size: 16px;
    font-weight: 100;
    color: #cb3454;
  }
`;
const AddCartFlex = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  background: white;
  justify-content: space-between;
  opacity: 1;
  z-index: 1;
  position: absolute;
  bottom: 0;
  & div {
    display: flex;
    flex-direction: column;
  }
  & h1 {
    font-size: 16px;
    font-weight: 500;

    line-height: 20px;
  }
  &h2 {
    font-size: 15px;
    font-weight: 400;
    color: #ff6d11;
    line-height: 23px;
  }
`;
const CartProduct = () => {
  return (
    <>
      <CartFlex>
        <ImageDiv>
          <img
            src="https://images.fraazo.com/fraazo-master/VBOT12.png/tr:w-256,h-256,f-webp"
            alt="dsvc"
          />
        </ImageDiv>

        <HeadingFlex>
          <h1>Bottle Gourd (Dudhi / Lauki)</h1>
          <p>1pc</p>
          <h2> 32</h2>
        </HeadingFlex>
        <RemoveFlex>
          <h1>Remove</h1>
          <h2>Out Of Stock</h2>
        </RemoveFlex>
      </CartFlex>

      <AddCartFlex>
        <div>
          <h1>3 items</h1>
          <h2> 72</h2>
        </div>
        <Button
          size="md"
          height="48px"
          width="200px"
          color={"white"}
          marginRight={"20px"}
          background="#5bc8ae"
          _hover={{ color: "white", background: "#5bc8ae" }}
        >
          CHECKOUT
        </Button>
      </AddCartFlex>
    </>
  );
};

export default CartProduct;
