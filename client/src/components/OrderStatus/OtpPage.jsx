import React, { useEffect, useRef, useState } from "react";
import loading1 from "../../assets/yourRequestIseBeingProcessed.gif";
import loading2 from "../../assets/dotsLoading.gif";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
const getDate = () => {
  return new Date().toDateString();
};
const getSecureNum = () => {
  let { mobile } = JSON.parse(localStorage.getItem("currentLogin")) || false;
  let secureNum = "";
  // console.log(typeof mobile, mobile);
  if (mobile) {
    for (let i = 0; i < mobile.length; i++) {
      if (i == 1 || i == 6 || i == 9) {
        secureNum += mobile[i];
      } else {
        secureNum += "X";
      }
    }
    return secureNum;
  }
  return "";
};

const generateOTP = () => {
  let digits = "0123456789";
  let otpLength = 6;
  let otp = "";
  for (let i = 1; i <= otpLength; i++) {
    let index = Math.floor(Math.random() * digits.length);
    otp = otp + digits[index];
  }
  localStorage.setItem("PaymentOtp", otp);
  return otp;
};

const OtpPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userOtp, setUserOtp] = useState("");
  const [time, setTime] = useState(60);
  const [loading, setLoading] = useState(
    "https://raw.githubusercontent.com/shriram083/Fraazo-Clone/master/src/assets/yourRequestIseBeingProcessed.gif"
  );
  const { data: cartData } = useSelector((state) => state.cart);
  const [loadingText, setLoadingText] = useState(
    "Your request is being processed. Please do not click your browser's Back or Refresh button"
  );
  const navigate = useNavigate();
  const toast = useToast();
  const browserHistory = createBrowserHistory();
  // console.log("history", browserHistory)

  const verifyOtp = () => {
    localStorage.setItem("TotalCartItems", cartData?.length);

    console.log("opt", userOtp);
    let actualOtp = localStorage.getItem("PaymentOtp");
    if (userOtp == actualOtp) {
      // console.log("Currect otp");
      // toast({
      //   title: `Correct OTP`,
      //   description: "",
      //   status: "success",
      //   position: "top",
      //   duration: 2000,
      //   isClosable: true,
      // });
      toast.closeAll();
      onOpen();
      setTimeout(() => {
        setLoading(
          "https://raw.githubusercontent.com/shriram083/Fraazo-Clone/master/src/assets/dotsLoading.gif"
        );
        setLoadingText("Please do not press 'Back' or 'Refresh' button");
      }, 2000);
      setTimeout(() => {
        onClose();
        browserHistory.replace("/");
        navigate("/checkout/payment-successful");
      }, 4000);
    } else {
      // console.log("wrong otp");
      toast({
        title: `Please Enter Correct OTP`,
        description: "",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  const handleCancelPayment = () => {
    toast.closeAll();
    onOpen();
    setTimeout(() => {
      onClose();
      browserHistory.replace("/");
      navigate("/checkout/payment-failed");
    }, 2000);
  };
  // window.onload = (event) => {
  //   toast.closeAll();
  //   onOpen();
  //   setTimeout(() => {
  //     onClose();
  //     browserHistory.replace("/");
  //     navigate("/checkout/payment-failed");
  //   }, 4000);
  // };

  const sendOtp = (delay) => {
    setTimeout(() => {
      // return ` Dear Apollo Customer, Your one time password is '${generateOTP()}' and valid for 2 mins.`;
      toast({
        title: `${generateOTP()} is your OTP.`,
        description: ` valid for 1 min`,
        status: "info",
        position: "top-right",
        duration: 7000,
        isClosable: true,
      });
    }, delay);
  };

  const getTime = (seconds) => {
    const sec = seconds % 60;
    const min = Math.floor(seconds / 60) % 60;

    return ` ${min > 9 ? min : "0" + min}m : ${sec > 9 ? sec : "0" + sec}s `;
  };

  const getCardNum = () => {
    let { cardNumber } = JSON.parse(
      localStorage.getItem("savedPaymentDetails")
    );
    // console.log("card Details:", cardNumber);
    let secureCardNum = "";
    for (let i = 0; i < cardNumber?.length; i++) {
      if (
        i == 0 ||
        i == 1 ||
        i == 2 ||
        i == 3 ||
        i == 15 ||
        i == 16 ||
        i == 17 ||
        i == 18
      ) {
        secureCardNum += cardNumber[i];
      } else {
        secureCardNum += "x";
      }
    }
    // console.log("card",secureCardNum);
    return secureCardNum;
  };
  useEffect(() => {
    let timer;

    timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(timer);
      generateOTP();
    }

    return () => clearInterval(timer);
  }, [time]);
  useEffect(() => {
    sendOtp(2000);
    window.scroll(0, 0);
    setTimeout(() => {
      browserHistory.replace("/");
      navigate("/checkout");
    }, 180000);
  }, []);
  return (
    <Box
      id="otpPage"
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
      <Box>
        <Flex id="paytmPG" bg="white" p="15px" justifyContent={"flex-end"}>
          <Image
            src="https://business.paytm.com/s3assets/images/pg929/pg-overview/svg/Group122070-pwe1307.svg"
            alt=""
          />
        </Flex>
        <Box p={"20px"} fontSize="15px">
          The One Time Password has been sent to the below Mobile Number. Please
          use the OTP and authenticate the transaction.
        </Box>
        <Box
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
        <Flex gap={5} justifyContent={"center"} pt={"15px"} fontSize={"13px"}>
          <Flex
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
          <Flex gap={1} flexDirection={"column"} textAlign="start">
            <Text id="payDate"> {getDate()}</Text>
            <Text id="secureCardNum">
              {getCardNum() ? getCardNum() : "6521xxxxxxxxxxxx4000"}
            </Text>
            <Text id="secureNum"> {getSecureNum()}</Text>
          </Flex>
        </Flex>
        <Box w={"80%"} boxShadow="md" margin={"auto"} mt={"15px"}>
          <Box fontSize={"13px"} color={"white"} bg={"orangered"} p={"10px 0"}>
            <Text>OTP (One Time Password)</Text>
            <Text id="timeoutDisplay">
              {time
                ? `Your OTP will expire in (${getTime(time)})`
                : `Your OTP has been expired click on Resend OTP to send new OTP`}
            </Text>
          </Box>
          <Box pb={3}>
            {time ? (
              ""
            ) : (
              <Button
                size="xs"
                color={"blue.400"}
                _hover={{ textDecoration: "underline" }}
                variant={"unstyled"}
                fontSize={"13px"}
                onClick={() => {
                  sendOtp(2000);
                  setTime(60);
                }}
              >
                <Text>Resend OTP</Text>
              </Button>
            )}

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
            <Button
              mt={2}
              variant={"outline"}
              id="cancel"
              onClick={() => handleCancelPayment()}
            >
              CANCEL
            </Button>
          </Box>
        </Box>
        <Text id="timeout" as="i">
          The page will automatically timeout after 180 seconds
        </Text>
      </Box>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay
          pointerEvents={"none"}
          bg="blackAlpha.300"
          backdropFilter="blur(4px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalBody p={"50px"}>
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              <Image h={"80px"} src={loading} />
              <Text mt={5} textAlign={"center"} lineHeight={"1.5"}>
                {loadingText}
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default OtpPage;
