import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";

const getDate = () => {
  return new Date().toDateString();
};
const getSecureNum = () => {
  let { mobile } = JSON.parse(localStorage.getItem("currentLogin"));
  let secureNum = "";
  // console.log(typeof mobile, mobile)

  for (let i = 0; i < mobile.length; i++) {
    if (i == 1 || i == 6 || i == 9) {
      secureNum += mobile[i];
    } else {
      secureNum += "X";
    }
  }
  return secureNum;
};

const generateOTP = () => {
  let digits = "0123456789";
  let otpLength = 6;
  let otp = "";
  for (let i = 1; i <= otpLength; i++) {
    let index = Math.floor(Math.random() * digits.length);
    otp = otp + digits[index];
  }
  localStorage.setItem("otp", otp);
  return otp;
};
const sendOtp = (delay) => {
  setTimeout(() => {
    return ` Dear Apollo Customer, Your one time password is '${generateOTP()}' and valid for 2 mins.`;
  }, delay);
};

const OtpPage = () => {
  const [userOtp, setUserOtp] = useState("");

  const verifyOtp = () => {
    console.log("opt", userOtp);
  };
  useEffect(() => {
    sendOtp(2000);
  }, []);
  return (
    <Box
      id="otpPage"
      class="otpPage"
      w={["100%", "70%", "60%", "40%"]}
      boxShadow={"base"}
      m="auto"
      mb="10px"
      mt={"30px"}
      rounded={"md"}
      pb={"20px"}
      minW="300px"
      bg={"#f9f8f8"}
    >
      <Box class="otpPageDiv">
        <Flex id="paytmPG" bg="white" p="15px" justifyContent={"flex-end"}>
          <Image
            src="https://business.paytm.com/s3assets/images/pg929/pg-overview/svg/Group122070-pwe1307.svg"
            alt=""
          />
        </Flex>
        <Box class="optInstru" p={"20px"} fontSize="15px">
          The One Time Password has been sent to the below Mobile Number. Please
          use the OTP and authenticate the transaction.
        </Box>
        <Box
          class="custumerCare"
          rounded={"sm"}
          fontSize="13px"
          bg={"#ecf5ea"}
          color="#238a64"
          border={"1px solid #61d1a8"}
          p="5px 0"
        >
          <Flex justifyContent={"center"} gap={2}>
            Not Your Contact Number?{" "}
            <Text
              color={"blue"}
              cursor={"pointer"}
              _hover={{ textDecoration: "underline" }}
            >
              {" "}
              Contact Customer Care
            </Text>
          </Flex>
          <Flex justifyContent={"center"} gap={2}>
            Recently changed your Mobile Number?{" "}
            <Text
              color={"blue"}
              cursor={"pointer"}
              _hover={{ textDecoration: "underline" }}
            >
              Click here to refresh
            </Text>
          </Flex>
        </Box>
        <Flex
          class="detailsField"
          gap={5}
          justifyContent={"center"}
          pt={"15px"}
          fontSize={"13px"}
        >
          <Flex
            class="detailsFieldLeft"
            gap={1}
            justifyContent={"flex-end"}
            flexDirection={"column"}
            color={"gray"}
            textAlign="end"
          >
            <Text>Date :</Text>
            <Text>Card Number :</Text>
            <Text>Mobile Number :</Text>
          </Flex>
          <Flex
            class="detailsFieldRigh"
            gap={1}
            flexDirection={"column"}
            textAlign="start"
          >
            <Text id="payDate"> {getDate()}</Text>
            <Text id="secureCardNum">6521xxxxxxxxxxxx4000</Text>
            <Text id="secureNum"> {getSecureNum()}</Text>
          </Flex>
        </Flex>
        <Box
          class="optPart"
          w={"80%"}
          boxShadow="md"
          margin={"auto"}
          mt={"15px"}
        >
          <Box
            class="otpPartTop"
            fontSize={"13px"}
            color={"white"}
            bg={"orangered"}
            p={"10px 0"}
          >
            <Text>OTP (One Time Password)</Text>
            <Text id="timeoutDisplay">
              Your OTP has been expired click on Resend OTP to send new OTP
            </Text>
          </Box>
          <Box pb={3} class="otpPartBottom">
            {/* <a href="" id="resendOtp"> */}
            <Button variant={"unstyled"} fontSize={"13px"}>
              <Text>Resend OTP</Text>
            </Button>
            {/* </a> */}
            <Text m={"4px 0"}>Enter OTP</Text>

            <Flex justifyContent={"center"}>
              <HStack>
                <PinInput
                  type="numeric"
                  name="otp"
                  size={"sm"}
                  onChange={(value) => setUserOtp(value)}
                >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Flex>
            {/* <Input type="text" id="otp" placeholder="Enter OTP" maxlength="6" /> */}

            <Text id="wrongOtp"></Text>
            <Button
              mr={2}
              mt={2}
              colorScheme="facebook"
              id="submit"
              onClick={verifyOtp}
            >
              SUBMIT
            </Button>
            <Button mt={2} variant={"outline"} id="cancel">
              CANCEL
            </Button>
          </Box>
        </Box>
        <Text id="timeout" as="i">
          The page will automatically timeout after 180 seconds
        </Text>
      </Box>
    </Box>
  );
};

export default OtpPage;
