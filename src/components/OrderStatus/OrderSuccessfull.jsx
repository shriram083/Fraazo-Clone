import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getCartItemAPI } from "../../store/cart/cart.actions";

const OrderSuccessfull = () => {
  const { data: cartData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const removeItemFromCartAPI = () => {
    if (cartData?.length != 0) {
      for (let i = 0; i < cartData?.length; i++) {
        console.log("id", cartData[i].id);
        axios
          .delete(`/cartItems/${cartData[i].id}`)
          .then((r) => console.log("removed Data:", r.data))
          .catch((e) => console.log("err", e.data));
      }
      dispatch(getCartItemAPI());
    }
  };

  const getAmt = () => {
    const amt = localStorage.getItem("totalAmt") || 170;
    return amt;
  };
  // generate Order ids
  const generateRandomNum = (otpLength) => {
    let digits = "0123456789";
    // let otpLength = 9;
    let otp = "";
    for (let i = 1; i <= otpLength; i++) {
      let index = Math.floor(Math.random() * digits.length);
      otp = otp + digits[index];
    }
    return otp;
  };
  const getOrderId = () => {
    let totalItems = Number(localStorage.getItem("TotalCartItems"));
    // console.log('totalItems:', totalItems)

    // let totalItems = 2;
    let OrderIds = [];
    for (let i = 0; i < totalItems; i++) {
      OrderIds.push(generateRandomNum(9));
    }
    // console.log(OrderIds);
    if (OrderIds.length == 1) {
      return `Order ID: ${OrderIds.join(",")}`;
    } else {
      return `Order ID(s): ${OrderIds.join(",")}`;
    }
  };
  const getRefNum = () => {
    let currDate = new Date();
    let year = currDate.getFullYear().toString();

    let month = currDate.getMonth().toString();
    month = Number(month) + 1 + "";
    if (month.length == 1) {
      month = 0 + month;
    }
    // console.log(month);

    let day = currDate.getDate().toString();
    if (day.length == 1) {
      day = 0 + day;
    }
    // console.log(day);
    let refNum = `${year}${month}${day}${generateRandomNum(10)}`;
    return refNum;
  };
  useEffect(() => {
    window.scroll(0, 0);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    removeItemFromCartAPI();
  }, []);
  return (
    <Flex
      flexDirection={"row"}
      m={"auto"}
      p={"60px"}
      bg={"white"}
      w={"80%"}
      flexWrap={"wrap"}
    >
      <Flex w={["90%", "95%", "40%"]} flexDirection={"column"} pr={"10px"}>
        <Box
          bg={"#edf7ed"}
          p={"20px"}
          mb={"20px"}
          rounded={"4px"}
          textAlign={"center"}
        >
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src="https://newassets.apollo247.com/images/ic_payment_success.svg"
              alt="success Icon"
            />
            <Heading
              fontSize={"15px"}
              p={"10px 0 9px"}
              fontWeight={700}
              color={"#4aa54a"}
            >
              PAYMENT SUCCESSFUL
            </Heading>
            <Text
              fontSize={"12px"}
              m={"0 0 4px"}
              fontWeight={700}
              color={"#545658"}
            >
              Your order of ₹{getAmt()} is placed
            </Text>
          </Flex>
        </Box>
        <Box mt={"20px"} mb={"20px"}>
          <Button
            color={"white"}
            bg={"#fc9916"}
            _hover={{ backgroundColor: "#fc9916" }}
            onClick={()=>navigate("/")}
          >
            GO TO HOME
          </Button>
          <Button
            color={"white"}
            bg={"#fc9916"}
            ml={2}
            _hover={{ backgroundColor: "#fc9916" }}
            onClick={()=>window.print()}
          >
            Print Receipt
          </Button>
        </Box>
      </Flex>
      <Flex
        pl={"10px"}
        w={["90%", "900%", "60%"]}
        flexDirection={"column"}
        textAlign={"left"}
      >
        <Box
          mb={"10px"}
          p={"10px 20px"}
          rounded={"4px"}
          border={"1px solid rgba(0, 0, 0, 0.17)"}
        >
          <Text fontSize={"12px"} color={"#68919d"}>
            {getOrderId()}
          </Text>
          <Text fontSize={"12px"} color={"#68919d"}>
            Payment Ref. Number - <span>{getRefNum()}</span>{" "}
          </Text>
        </Box>
        <Box
          mb={"10px"}
          p={"10px 0 10px 0"}
          rounded={"4px"}
          border={"1px solid rgba(0, 0, 0, 0.17)"}
        >
          <Box>
            <Text
              fontSize={"12px"}
              fontWeight={700}
              color={"#01475b"}
              lineHeight={"1.5p"}
              p={"0 20px 10px"}
              borderBottom={"1px solid rgba(0, 0, 0, 0.17)"}
            >
              Order Details
            </Text>
          </Box>
          <Flex justifyContent={"space-between"} p={"10px 20px 0 20px"}>
            <Box>
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={"#01475b"}
                lineHeight={"1.5p"}
              >
                {"Order Date & Time"}
              </Text>
              <Text
                fontSize={"12px"}
                fontWeight={500}
                color={"#545658"}
                lineHeight={"1.5p"}
              >
                {new Date().toString()}
              </Text>
            </Box>
            <Box>
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={"#545658"}
                lineHeight={"1.5p"}
              >
                Mode of Payment
              </Text>
              <Text
                fontSize={"12px"}
                fontWeight={700}
                color={"#01475b"}
                lineHeight={"1.5p"}
              >
                ONLINE
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box p="10px 10px">
          <Text color={"#68919d"} fontSize={"12px"} lineHeight={"1.5"}>
            Your order has been placed successfully. We will confirm the order
            in a few minutes.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default OrderSuccessfull;
