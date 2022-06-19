import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
const OrderFail = () => {
  const navigate = useNavigate();
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
          bg={"#edc6c2"}
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
              src="https://newassets.apollo247.com/images/ic_payment_failed.svg"
              alt="success Icon"
            />
            <Heading
              fontSize={"15px"}
              p={"10px 0 9px"}
              fontWeight={700}
              color={"#e02020"}
            >
              PAYMENT FAILED
            </Heading>
            <Text
              fontSize={"12px"}
              m={"0 0 4px"}
              fontWeight={700}
              color={"#545658"}
            >
              If any money is deducted, It will be refund in 3-5 working days
            </Text>
          </Flex>
        </Box>
        <Box mt={"20px"}>
          <Button
            color={"white"}
            bg={"#fc9916"}
            p={"0 40px"}
            _hover={{ backgroundColor: "#fc9916" }}
            onClick={() => navigate("/checkout")}
          >
            TRY AGAIN
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
            In case your account has been debited, you should get the refund in
            10-14 business days.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default OrderFail;
