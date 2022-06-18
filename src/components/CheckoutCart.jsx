import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { TbCurrencyRupee, TbDiscount2 } from "react-icons/tb";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import CartProduct from "./CartComponents/CartProduct";

const CheckoutCart = () => {
  const { data: cartData, getCartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenely"
        alignItems="start"
        gap="20px"
      >
        <Box
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          width="700px"
          padding="20px"
        >
          <Heading fontSize="18px" fontWeight="500" textAlign="left">
            {`Cart Items : ${cartData.length}`}
          </Heading>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="left"
            margin="20px"
          >
            {cartData.length === 0 ? (
              "cart is empty"
            ) : (
              <>
                {cartData?.map((cartItem) => {
                  return <CartProduct key={cartItem.id} cartItem={cartItem} />;
                })}
              </>
            )}
          </Box>
        </Box>
        <Box
          boxShadow="xs"
          width="500px"
          padding="30px"
          display="flex"
          flexDirection="column"
          gap="20px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            border="2px dashed #feb687"
            padding="10px"
            borderRadius="10px"
            bg="#fbf2ec"
          >
            <TbDiscount2 fontSize="30px" color="orange" />
            <Text>Apply Coupon/Refferaal</Text>
            <ChevronRightIcon fontSize="30px" />
          </Box>
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
            fontWeight="500"
            color="#43c6ac"
          >
            <Text>Price Savings</Text>
            <Box display="flex" flexDirection="row" alignItems="center">
              -<TbCurrencyRupee />
              <Text>{`${
                getCartItems.withoutDiscountPrice -
                getCartItems.withDiscountPrice
              }`}</Text>
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
              <Text>{`${getCartItems.withDiscountPrice}`}</Text>
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
            <Box display="flex" flexDirection="row" alignItems="center">
              <TbCurrencyRupee />
              <Text
                style={{ color: "red" }}
                fontSize="20px"
                fontWeight="500"
              >{`${getCartItems.withDiscountPrice + 30}`}</Text>
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
            <Heading fontSize="18px" cursor="pointer">
              SELECT ADDRESS
            </Heading>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutCart;
