import {
  Box,
  Button,
  Checkbox,
  color,
  Flex,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import { CgFormatSlash } from "react-icons/cg";
import React, { useState } from "react";
import { BillDetails } from "./BillDetails";
import { useNavigate } from "react-router";
let initState = {
  cardNumber: "",
  expiryMonth: "",
  expiryYear: "",
  cardName: "",
  cvv: "",
};
//////// SETTING LOCAL STORAGE
localStorage.setItem(
  "savedPaymentDetails",
  JSON.stringify({
    cardNumber: "1234567891234567",
    expiryMonth: "01",
    expiryYear: "24",
    cardName: "fraazo",
    cvv: "123",
  })
);

///////////
const Payment = () => {
  const [cardPaymentDetails, setCardPaymentDetails] = useState(initState);
  const toast = useToast();
  //////// HANDLING ON CHANGE
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    //  console.log("card", name, value, name.length);

    if (name === "cvv") {
      if (value.length > 3) {
        return;
      } else {
        setCardPaymentDetails({
          ...cardPaymentDetails,
          [name]: value,
        });
      }
    } else if (name === "expiryMonth" || name === "expiryYear") {
      if (value.length > 2) {
        return;
      } else {
        setCardPaymentDetails({
          ...cardPaymentDetails,
          [name]: value,
        });
      }
    } else if (name === "cardNumber") {
      if (value.length > 16) {
        return;
      } else {
        setCardPaymentDetails({
          ...cardPaymentDetails,
          [name]: value,
        });
      }
    } else {
      setCardPaymentDetails({
        ...cardPaymentDetails,
        [name]: value,
      });
    }
    ////   console.log(cardPaymentDetails);
  };

  //////// HANDLING ON SUBMIT

  const handleSubmitPayment = () => {
    let savedPaymentDetails = JSON.parse(
      localStorage.getItem("savedPaymentDetails")
    );
    if (
      savedPaymentDetails.cardNumber === cardPaymentDetails.cardNumber &&
      savedPaymentDetails.cvv === cardPaymentDetails.cvv
    ) {
      console.log("CARD PAYMENT SUCCESS");
      navigate("/checkout/otp");
    } else {
      toast({
        title: `Please Enter Valid Card Details`,
        description: "",
        status: "warning",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      console.log("CARD PAYMENT FAILURE");
    }
  };
  ///////////////
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "60%",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          padding: "20px",
          width: "900px",
          height: "auto",
          padding: "20px",
        }}
      >
        <Tabs
          variant="unstyled"
          fontSize="14px"
          orientation="vertical"
          display="flex"
        >
          <TabList
            borderRight="2px solid #EEEEEE80"
            width="300px"
            height="auto"
            fontSize="28px"
            color="#1A201E"
            flex-direction="column"
            align="start"
          >
            {" "}
            Payments
            <Tab
              align="start"
              _selected={{
                color: "#5DC6AC",
                bg: "#EEEEEE80",
                borderRight: "3px solid #5DC6AC",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              width="200px"
              height="50px"
            >
              Credit / Debit Cards
            </Tab>
            <Tab
              _selected={{
                color: "#5DC6AC",
                bg: "#EEEEEE80",
                borderRight: "3px solid #5DC6AC",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              width="200px"
              height="50px"
            >
              <div>Sudexo Cards</div>
            </Tab>
            <Tab
              _selected={{
                color: "#5DC6AC",
                bg: "#EEEEEE80",
                borderRight: "3px solid #5DC6AC",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              width="200px"
              height="50px"
            >
              Net Banking
            </Tab>
            <Tab
              _selected={{
                color: "#5DC6AC",
                bg: "#EEEEEE80",
                borderRight: "3px solid #5DC6AC",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              width="200px"
              height="50px"
            >
              Wallets
            </Tab>
            <Tab
              _selected={{
                color: "#5DC6AC",
                bg: "#EEEEEE80",
                borderRight: "3px solid #5DC6AC",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              width="200px"
              height="50px"
            >
              UPI
            </Tab>
            <Tab
              _selected={{
                color: "#5DC6AC",
                bg: "#EEEEEE80",
                borderRight: "3px solid #5DC6AC",
              }}
              color="#666666"
              justifyContent="flex-start"
              padding="20px 14px"
              fontSize="14px"
              width="200px"
              height="50px"
            >
              Cash
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel width="100%" boxShadow={"base"} rounded="md">
              <div mb="25px">
                <Flex justifyContent={"space-between"}>
                  <p
                    align="left"
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Card number
                  </p>
                  <Popover>
                    <PopoverTrigger>
                      <Button size="sm">Demo Card Details</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader fontWeight={600}>
                        Card Details for Demo
                      </PopoverHeader>

                      <PopoverBody>
                        <Flex gap={3} justifyContent="center">
                          <Box
                            justifyContent={"flex-end"}
                            textAlign={"right"}
                            fontWeight={500}
                          >
                            <Text>Card Number:</Text>
                            <Text>Expiry (MM/YY):</Text>
                            <Text>CVV :</Text>
                            <Text>Name :</Text>
                          </Box>
                          <Box justifyContent={"flex-start"} textAlign={"left"}>
                            <Text> 1234567891234567</Text>
                            <Text> 01/24</Text>
                            <Text> 123</Text>
                            <Text> Anything</Text>
                          </Box>
                        </Flex>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
                <Stack spacing={3} mb="40px">
                  <Input
                    variant="flushed"
                    width="50%"
                    focusBorderColor="green.200"
                    onChange={(e) => handleOnChange(e)}
                    value={cardPaymentDetails.cardNumber}
                    name="cardNumber"
                    placeholder="Card Number"
                  />
                </Stack>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "25px",
                }}
              >
                <div>
                  <p
                    align="left"
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Expiry (MM/YY)
                  </p>
                  <div
                    spacing={3}
                    style={{
                      marginLeft: "0",
                      display: "flex",
                      width: "70%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Input
                      variant="flushed"
                      width="40%"
                      focusBorderColor="green.200"
                      onChange={(e) => handleOnChange(e)}
                      name="expiryMonth"
                      placeholder="MM"
                      value={cardPaymentDetails.expiryMonth}
                    />

                    <Input
                      placeholder="YY"
                      variant="flushed"
                      width="40%"
                      focusBorderColor="green.200"
                      onChange={(e) => handleOnChange(e)}
                      name="expiryYear"
                      value={cardPaymentDetails.expiryYear}
                    />
                  </div>
                </div>
                <div>
                  <p
                    align="left"
                    style={{
                      color: "grey",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    CVV
                  </p>
                  <Stack spacing={3}>
                    <Input
                      variant="flushed"
                      width="100%"
                      focusBorderColor="green.200"
                      onChange={(e) => handleOnChange(e)}
                      name="cvv"
                      placeholder="XXX"
                      value={cardPaymentDetails.cvv}
                    />
                  </Stack>
                </div>
              </div>
              <div mb="25px">
                <p
                  align="left"
                  style={{
                    color: "grey",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Card name
                </p>
                <Stack spacing={3} mb="40px">
                  <Input
                    variant="flushed"
                    width="50%"
                    focusBorderColor="green.200"
                    onChange={(e) => handleOnChange(e)}
                    name="cardName"
                    value={cardPaymentDetails.cardName}
                  />
                </Stack>
              </div>
              <div
                style={{
                  display: "flex",
                  color: "grey",
                  fontWeight: "lighter",
                }}
              >
                <Checkbox size="md" colorScheme="green" defaultChecked>
                  Securely save card details
                </Checkbox>
              </div>
              <Button
                marginTop="2rem"
                bg="#47be9b"
                color="white"
                variant="solid"
                width="50%"
                borderRadius="10px"
                display="flex"
                onClick={() => handleSubmitPayment()}
              >
                PAY NOW
              </Button>
            </TabPanel>
            <TabPanel width="100%" boxShadow={"base"} rounded="md">
              <img
                width="85rem"
                height="30rem"
                src="data:image/png;base64,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"
                alt=""
              />
              <Button
                marginTop="2rem"
                bg="#47be9b"
                color="white"
                variant="solid"
                width="50%"
                borderRadius="10px"
                display="flex"
              >
                PAY NOW
              </Button>
            </TabPanel>
            <TabPanel width="100%" boxShadow={"base"} rounded="md">
              <Select
                style={{ border: "1px solid #5DC6AC" }}
                placeholder="Select bank"
              >
                <option value="option1">Axis Bank</option>
                <option value="option2">Kotak Mahendra Bank</option>
                <option value="option3">State Bank of India</option>
              </Select>
              <Button
                marginTop="2rem"
                bg="#47be9b"
                color="white"
                variant="solid"
                width="50%"
                borderRadius="10px"
                display="flex"
              >
                PAY NOW
              </Button>
            </TabPanel>
            <TabPanel width="100%" boxShadow={"base"} rounded="md">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4,1fr)",
                  gap: "2%",
                }}
              >
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/mobikwik.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Mobikwick</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/payzapp.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Payzapp</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/olamoney.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Olamoney</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/amazonpay.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                      cursor: "pointer",
                      marginBottom: "10px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Amazonpay</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/freecharge.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Freecharge</p>
                </Box>
                <Box
                  style={{
                    height: "110px",
                    width: "110px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src="https://cdn.razorpay.com/wallet-sq/jiomoney.png"
                    alt="mobikwick"
                    style={{
                      width: "40px",
                      height: "40px",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  />
                  <p style={{ marginTop: "10px" }}>Jiomoney</p>
                </Box>
              </div>
              <Button
                marginTop="2rem"
                bg="#47be9b"
                color="white"
                variant="solid"
                width="50%"
                borderRadius="10px"
                display="flex"
              >
                PAY NOW
              </Button>
            </TabPanel>
            <TabPanel width="100%" boxShadow={"base"} rounded="md">
              <div>
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #EEEEEE80 ",
                    height: "50px",
                  }}
                  type="text"
                  placeholder="Enter UPI ID"
                />
              </div>
              <Button
                marginTop="2rem"
                bg="#47be9b"
                color="white"
                variant="solid"
                width="50%"
                borderRadius="10px"
                display="flex"
              >
                PAY NOW
              </Button>
            </TabPanel>
            <TabPanel width="100%" boxShadow={"base"} rounded="md">
              <div style={{ display: "flex" }}>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAES0lEQVR4Xu2ay2sTQRzHv5NNNmnSJtH6AAVBRJDWBwhWTEDBm6kgKMWj9eTFo49/wFNvXkRP6knxptJ68eKhRQu+EMXXzVsfmvd7szIxMZtkszOb3Wy2ZfbQS2bm95vPfn+PmS6BeOoEiODwj4AA0VCCACFAtCcFoQihCKEI3UIpQkOEhggNRmjMzEjx2VwZgGdTdJsEvxYTC3t491LPEfH5hMo7YaONU6HOLU2/uMnym8SfJ+bgwXXWwI38++L0ArMokM2shubLU4Ha0vSCZPQyHQFRKZWRS2e6/CCEILJtqyNiY6lCF0T69x/UlNp/ByWvhLEtUdMOJ1fXuecMGkpfIPQ2EN0+zr0pMwA6Fw2GRyH7/dy2eAeaBlEqFFHI5rrWD0XG4JNlpl0rELSLmwHPdAqAaRB00X4VoTfv8m4f088v2RrepJSucXbCcAyEHoRP8SATgnbAocV823ifX0YoPGZqjV6D9fxTsuq2r1eX64msZ9VQqgpyqTRC0TAkybDyIJ/JolwsdflgFQRd0C5VGIXs59k3xJbyaWTk1v5W4ju3oxvo0xUFyykFz1aqPd+8HTAMc5eKO5ZB0P6A9gm8z9sTQcia00xnOOitM3AQRqHBuzEj0mZC4/yHIn7kWr2L1r7k9WJsS4TXJd1xrGpmWRG9DHgJ8D5mLVnaWU6HBoJuwowiLrwv4nteXxF2JM2BgqiWK8im0qYk2wmHJ0e4HkQxl0cxX+gJgqWIw4t58F6EWE2YA1WEUqkik0z1BeLkcgF/KrwYrPcTAwXRqx1vkvkYC8LTcSXyYq2KG9/4y21zLVcrggWC/v4uFoRPAyOvAMdft7fSPElmw4Ogm3x5bAQ75RYNGhFHl/hhyH4ZQYtnjoGHRilfQCHH3tSjIwEcHG2/IHeqYvAo13JDxWOkKf3bB/w4Pd5+3uCBYTUseHy0BUS1UkE2yddPXNrlw7W9rTsKFgg2BBXJ1d911sRDEBnXvwMdeGg03zbLkDYhxqIS7k3+O5UagaDnC3rOMHp4L5FY/tmiiH5gsCqFR5IQ3mp8Ydxrc3oqchQETyyyANDfvbIPo5Ewc6irQVDvabdJu85+HnZOaK1aqylIrye7zLhCEVqvWHLUjh0ZDcE/EjDNjiZpmqxZHSjLF1tzhNEucqkMKuX21joQGkEgaO7OwjSpxgTXgOh3A3bM4ynvJLZwZh9RyU87DLp1DZYa6j0I/ROfTzwGcNGtG7HiFw+E/yCahk7MJ856VPWU1nCpWLpmxZGhzFVV0H9d1mq9r/46/WJ+QDH54Dj/7clQdm2PUQGiwVGAECDaQ0ooglcRE/en7hJCrtiTkty7ClMR1PXNXjlUqE+4QBx4ODUuqWTNve/Tmmf17yPMLDHxYOoVATlpZo6bx7Z9MeNmR530zZQinHTMaVsCBG/5dPrNDMueUIRQhMkWe1hSddquCA0RGiI0dKNOhEYDy1/Nc9WulhceAwAAAABJRU5ErkJggg=="
                  alt=""
                />
                <p
                  style={{
                    // margin: "auto",
                    margin: "20px 20px 20px 20px",
                    color: "#999999",
                    justifyContent: "flex-start",
                  }}
                >
                  Please keep exact change to help us serve you better
                </p>
              </div>
              <Button
                marginTop="2rem"
                bg="#47be9b"
                variant="solid"
                width="50%"
                borderRadius="10px"
                display="flex"
                color="white"
              >
                PAY NOW
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <div style={{ marginLeft: "50px", width: "30%" }}>
        <BillDetails />
      </div>
    </div>
  );
};

export default Payment;
