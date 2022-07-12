import {
  Button,
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  Text,
  RadioGroup,
  Radio,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getOTP, saveDetails } from "../store/authentication/auth.actions";
import { GET_LOGIN } from "../store/authentication/auth.types";
import loginSuccess from "../assets/loginSuccess.png";
const GetOTP = styled.button`
  background-color: #43c6ac;
  color: white;
  width: 40%;
  padding: 10px 0px;
  border-radius: 50px;
`;
const FootBox = styled.button`
  margin-bottom: 40px;
  margin-top: 20px;
`;

const InputBar = styled.input`
  width: 100%;
  outline: none;
  border-bottom: 1px solid #43c6ac;
  padding: 8px 0px;
`;
const InputBarOTP = styled.input`
  width: 100%;
  outline: none;
  border-bottom: 1px solid #43c6ac;
`;

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();

  const initialRef = useRef(null);
  const OTP = useRef(null);
  const [value, setvalue] = useState(true);
  const [valid, setValid] = useState(true);
  const f_name = useRef(null);
  const l_name = useRef(null);
  const email = useRef(null);
  const [title, setTitle] = useState();

  const gOTP = useSelector((otp) => otp.auth.otp.otp);
  const isAuth = useSelector((value) => value.auth.isAuth);
  const mNumber = useSelector((otp) => otp.auth.otp.mobile);

  const dispatch = useDispatch();

  const handleOTP = () => {
    let x = initialRef.current.value;
    if (x.length === 10) {
      let generatedOTP = generateOTP();
      dispatch(getOTP({ mobile: initialRef.current.value, otp: generatedOTP }));
      initialRef.current.value = "";
      setvalue(false);
    }
  };

  const submitOTP = () => {
    console.log("current:", OTP.current.value, gOTP);

    if (OTP.current.value === gOTP) {
      let flag = localStorage.getItem("flag") || false;
      // dispatch(confirmOTP(OTP.current.value))
      if (flag) {
        dispatch({ type: GET_LOGIN });
        OTP.current.value = "";
        setValid(false);
      } else {
        OTP.current.value = "";
        setValid(false);
        console.log("false:");
      }
    } else {
      console.log("wrong otp");
      toast({
        title: `Please Enter Correct OTP`,
        description: "",
        status: "warning",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
      // toast.closeAll();
    }
  };

  const handleData = (e) => {
    e.preventDefault();

    dispatch(
      saveDetails({
        firstname: f_name.current.value,
        lastname: l_name.current.value,
        email: email.current.value,
        title: title,
        mobile: mNumber,
      })
    );
  };

  function generateOTP() {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

  useEffect(() => {
    if (isAuth) {
      //console.log("inside");
      setTimeout(() => {
        //onClose();
        navigate("/");
      }, 2000);
    }
    onOpen();
  }, []);

  return (
    <Box>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {value ? (
          <ModalContent borderRadius="20px">
            <ModalHeader> </ModalHeader>
            <ModalCloseButton />
            <ModalHeader p="0px 24px">Welcome to Fraazo!</ModalHeader>
            <ModalBody pt="0">Sign In to track your Order and More.</ModalBody>
            <ModalBody pb={6}>
              <FormControl>
                {/* <FormLabel>First name</FormLabel> */}
                <InputBar
                  ref={initialRef}
                  maxLength={"10"}
                  placeholder="Enter Your Mobile Number"
                />
              </FormControl>

              <Text opacity="0.7" fontSize="13px">
                We will send you an OTP on this number
              </Text>
            </ModalBody>

            <FootBox>
              <GetOTP colorScheme="blue" mr={3} onClick={handleOTP}>
                Get OTP
              </GetOTP>
            </FootBox>
          </ModalContent>
        ) : valid ? (
          <ModalContent borderRadius="20px">
            <ModalHeader> </ModalHeader>
            <ModalCloseButton />
            <ModalHeader>Welcome to Fraazo!</ModalHeader>
            <ModalBody color="#43c6ac">Your OTP is : {gOTP}</ModalBody>
            <ModalBody>Sign In to track your Order and More.</ModalBody>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Enter 6-Digit OTP</FormLabel>
                <InputBarOTP ref={OTP} />
              </FormControl>

              <Text opacity="0.7" fontSize="13px">
                OTP has been sent to {mNumber}
              </Text>
              <Text opacity="0.7" fontSize="13px">
                Haven't received your OTP yet?
              </Text>
            </ModalBody>

            <FootBox>
              <GetOTP colorScheme="blue" mr={3} onClick={submitOTP}>
                Continue
              </GetOTP>
            </FootBox>
          </ModalContent>
        ) : isAuth ? (
          <ModalContent borderRadius="20px" textAlign="center">
            <ModalCloseButton onClick={() => navigate("/")} />
            <ModalHeader>Welcome to Fraazo!</ModalHeader>
            <ModalBody
              p="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={loginSuccess} width="40%" alt="" />
            </ModalBody>
            <ModalBody>Mobile No Verified </ModalBody>
          </ModalContent>
        ) : (
          <ModalContent borderRadius="20px">
            <form onSubmit={(e) => handleData(e)}>
              <ModalCloseButton />
              <ModalHeader>Hello New Customer</ModalHeader>
              <ModalBody>Register now for Unbelievable Discounts.</ModalBody>
              <ModalBody pb={6}>
                <FormControl>
                  <div display="flex">
                    <input
                      ref={f_name}
                      placeholder="First Name"
                      style={{
                        outline: "none",
                        borderBottom: "1px solid #43c6ac",
                        marginRight: "35px",
                      }}
                      required
                    />
                    <input
                      ref={l_name}
                      placeholder="Last Name"
                      style={{
                        outline: "none",
                        borderBottom: "1px solid #43c6ac",
                      }}
                      required
                    />
                  </div>
                  <InputBar
                    ref={email}
                    placeholder="Email Id"
                    type="email"
                    required
                  />
                  <InputBar
                    value={mNumber}
                    placeholder="Mobile Number"
                    required
                  />

                  <RadioGroup
                    onChange={(e) => setTitle(e)}
                    display="flex"
                    mt="20px"
                    required
                  >
                    <Box mr={2}>Title :</Box>
                    <Radio mr={2} value="Mr." name="title">
                      Mr.
                    </Radio>
                    <Radio mr={2} value="Mrs." name="title">
                      Mrs.
                    </Radio>
                    <Radio mr={2} value="Miss" name="title">
                      Miss
                    </Radio>
                  </RadioGroup>
                </FormControl>
              </ModalBody>
              <FootBox>
                <Button
                  ml="160px"
                  bgColor="#43c6ac"
                  color="white"
                  borderRadius="10px"
                  p="0px 30px"
                >
                  Submit
                </Button>
              </FootBox>
            </form>
          </ModalContent>
        )}
      </Modal>
    </Box>
  );
};

export default Login;
