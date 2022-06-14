import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  GridItem,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";

const ToolTip = styled.i`
  font-size: 12px;
  cursor: pointer;
  color: #828282;
`;
const CartPlusIcon = styled.i`
  margin-right: 5px;
`;
const AddToCartBtn = styled.button`
  border-radius: 15px;
  background-color: #fff;
  color: #4fbb90;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  padding: 6px 16px;
  outline: 0;
  border: 1px solid #4fbb90;
  min-width: 80px;
  &:hover {
    background-color: #4fbb90;
    color: #fff;
  }
`;
const CartDec = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 7px 4px 9px;
  color: #4fbb90;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border: 1px solid #4fbb90;
  &:hover {
    background-color: #4fbb90;
    color: #fff;
  }
`;
const CartInc = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 9px 4px 7px;
  color: #4fbb90;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #4fbb90;
  &:hover {
    background-color: #4fbb90;
    color: #fff;
  }
`;
const CardCount = styled.div`
  width: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding-top: 4px;
  text-align: center;
`;

const AllProductsLayout = ({ product }) => {
  // console.log("porductsData", product);
  const [count, setCount] = useState(0);
  return (
    <Box
      border={"1px solid #eee"}
      transition={".3s"}
      rounded={4}
      height="300px"
      _hover={{
        transition: ".6s",
        boxShadow: "0 0 9px 0 rgb(0 0 0 / 30%)",
      }}
    >
      <Box p={"10px 20px 0"} bg={"#f9f9f9"} rounded={4}>
        <Image
          src={product?.imgUrl}
          h="185px"
          bg={"#f9f9f9"}
          display="block"
          m={"auto"}
        />
      </Box>
      <Box p={"12px"} textAlign="left">
        <Box
          h={"38px !important"}
          fontSize="14px"
          lineHeight={"19px"}
          fontWeight="400"
          overflow={"hidden"}
          textOverflow="ellipsis"
          opacity={"0.9"}
        >
          <Text color={"gray"}>{product?.name}</Text>
        </Box>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Stack textAlign={"left"}>
            <Flex gap={2} alignItems="center">
              <Text fontSize="13px" opacity={"0.5"}>
                {product?.packSize}
              </Text>
              {product?.tooltipText && (
                <Tooltip
                  hasArrow
                  label={product?.tooltipText}
                  bg="#666"
                  opacity={"0.5"}
                  color="white"
                  placement="top"
                  fontWeight={400}
                  fontSize="12px"
                >
                  <ToolTip className="fa-solid fa-circle-info"></ToolTip>
                </Tooltip>
              )}
            </Flex>
            <Flex gap={2} fontSize="16px" m="0 !important">
              <Text>₹{product?.price}</Text>
              <Text as="s" color={"#828282"}>
                {product?.strikePrice ? `₹${product?.strikePrice}` : ""}
              </Text>
            </Flex>
          </Stack>
          <Stack>
            {/* <AddToCartBtn>
              <CartPlusIcon className="fa-solid fa-cart-plus"></CartPlusIcon>
              ADD
            </AddToCartBtn> */}
            <Flex>
              <CartDec>
                <i className="fa-solid fa-minus"></i>
              </CartDec>
              <CardCount>{count}</CardCount>

              <CartInc>
                <i className="fa-solid fa-plus"></i>
              </CartInc>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default AllProductsLayout;
