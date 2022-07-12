import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { TbCurrencyRupee } from "react-icons/tb";
import { useSelector } from "react-redux";

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
          width="750px"
          padding="20px"
        >
          <Heading fontSize="25px" fontWeight="500" textAlign="left">
            Delivery Type
          </Heading>

          <Box
            display="flex"
            justifyContent="space-between"
            margin="20px"
            gap="20px"
          >
            <Box
              boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
              borderRadius="10px"
              height="230px"
              width="270px"
              textAlign="center"
              padding="20px"
              bg="#e5e5e5"
            >
              <Heading fontSize="20px" margin="20px" fontFamily="">
                EXPRESS DELIVERY
              </Heading>
              <Text margin="20px">90 Mins Express</Text>
            </Box>
            <Box
              boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
              height="180px"
              width="300px"
              borderRadius="5px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="22px" fontWeight="500">
                Schedule Your Delivery
              </Text>
              <Box>
                <Text>
                  Today,{" "}
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
                <Text>
                  Tommorow,{" "}
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          boxShadow="xs"
          width="500px"
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
              <Text>{`${getCartItems.withDiscountPrice + 30}`}</Text>
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
                <Text>{`${getCartItems.withoutDiscountPrice + 30}`}</Text>
              </Box>
            </Box>
            <Heading fontSize="19px" fontWeight="500">
              PLACE ORDER
            </Heading>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutCart;
