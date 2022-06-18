import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { TbCurrencyRupee } from "react-icons/tb";
import { useSelector } from "react-redux";

export const BillDetails = () => {
  const { data: cartData, getCartItems } = useSelector((state) => state.cart);
  useEffect(()=>{
    localStorage.setItem("totalAmt",Number(getCartItems.withDiscountPrice)+30);
  },[getCartItems])
  return (
    <div>
      <Box
        boxShadow="xs"
        width="400px"
        padding="30px"
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <Heading
          fontSize="30px"
          fontWeight="300"
          fontFamily="Quicksand"
          margin="10px 0px"
          textAlign="left"
        >
          Bill Details
        </Heading>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>{`${cartData.length} X Total Item Price`}</Text>
          <Box display="flex" flexDirection="row" alignItems="center">
            <TbCurrencyRupee />
            <Text>{`${getCartItems.withoutDiscountPrice}`}</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Price Savings</Text>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            fontWeight="500"
            color="#43c6ac"
          >
            -<TbCurrencyRupee />
            <Text>
              {getCartItems.withoutDiscountPrice -
                getCartItems.withDiscountPrice}
            </Text>
          </Box>
        </Box>
        <hr />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Cart Amount</Text>
          <Box display="flex" flexDirection="row" alignItems="center">
            <TbCurrencyRupee />
            <Text>{getCartItems.withDiscountPrice}</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>Delivery Charges</Text>
          <Box display="flex" flexDirection="row" alignItems="center">
            <TbCurrencyRupee />
            <Text>30</Text>
          </Box>
        </Box>
        <hr />
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text>
            To Pay <span style={{ color: "red" }}>(Saved 30 )</span>
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            color="red"
            fontSize="20px"
          >
            <TbCurrencyRupee />
            <Text>{getCartItems.withDiscountPrice + 30}</Text>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          bg="#47be9b"
          color="white"
          padding="10px 20px"
          borderRadius="10px"
          margin="10px"
        >
          <Box>
            <Text>Total</Text>
            <Box display="flex" flexDirection="row" alignItems="center">
              <TbCurrencyRupee />
              <Text>{`${getCartItems.withDiscountPrice + 30}`}</Text>
            </Box>
          </Box>
          <Heading fontSize="19px" fontWeight="500">
            PLACE ORDER
          </Heading>
        </Box>
      </Box>
    </div>
  );
};
