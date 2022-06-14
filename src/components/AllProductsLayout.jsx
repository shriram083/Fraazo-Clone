import React from "react";
import { Box, Image, Flex, Heading, Text, Stack,GridItem } from "@chakra-ui/react";
const AllProductsLayout = ({ product }) => {
  console.log("porductsData", product);
  return (
    <GridItem  maxW={'200px'} border={'1px solid black'} rounded={5} p={4}>
      <Image src={product?.imgUrl} />
      <Text>{product?.name}</Text>
      <Flex justifyContent={'space-between'} alignItems={"center"}>
        <Stack textAlign={'left'}>
          <Text>{product?.packSize}</Text>
          <Flex gap={2}>
            <Text>₹ {product?.price}</Text>
            <Text>₹ {product?.strikePrice ? product?.strikePrice: ""}</Text>
          </Flex>
        </Stack>
        <Stack>
            <i className="fa-solid fa-cart-shopping"></i>
        </Stack>
      </Flex>
    </GridItem >
  );
};

export default AllProductsLayout;
