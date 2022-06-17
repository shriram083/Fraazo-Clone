import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import map from "../assets/mapImage.png";
import searchAddress from "../assets/searchAddress.png";
import { TbCurrencyRupee } from "react-icons/tb";
import { FiMoreVertical } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { GrLocation } from "react-icons/gr";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import {
  ArrowBackIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import styled from "styled-components";
import { useSelector } from "react-redux";
const MyInput = styled.input`
  border: 1px solid gray;
  padding: 15px;
  margin: 10px auto;
  width: 400px;
  display: block;
  border-radius: 5px;
`;
const CheckoutCart = () => {
  const { getCartItems, data: cartData } = useSelector((state) => state.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawer, setDrawer] = useState(false);
  const [formData, setFormData] = useState({
    completeAddress: "",
    flatNo: "",
    building: "",
    howToReach: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const hadnleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      completeAddress: "",
      flatNo: "",
      building: "",
      howToReach: "",
      type: "",
    });
    setDrawer(false);
    onClose();
  };
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
            Address
          </Heading>
          <Box
            display="flex"
            flexDirection="row"
            gap="10px"
            alignItems="start"
            margin="30px 0px"
          >
            <TiLocation fontSize="30px" color="#47be9b" />
            <Text textAlign="left" color="grey">
              Delivering <br /> To :
            </Text>
            <Text fontWeight="500">ABC - 1 2</Text>
            <Button bg="none" color="#47be9b" onClick={onOpen}>
              Change
            </Button>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box
              border="2px solid #47be9b"
              borderRadius="10px"
              height="250px"
              width="350px"
              textAlign="left"
              padding="20px"
            >
              <Box display="flex" gap="20px">
                <GrLocation />
                <Text>Other</Text>
              </Box>
              <Text>Flat Details : 1</Text>
              <Text>Address : G wing, Tax Center, Pawai, Mumbai - 123 123</Text>
              <Text>Building : 2</Text>
              <Text>How to reach : 3</Text>
              <Text>Pincode : 123 123</Text>
              <Text>City : Mumbai</Text>
            </Box>
            <Box
              boxShadow="xs"
              height="180px"
              width="300px"
              cursor="pointer"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              onClick={onOpen}
            >
              <MdOutlineAddLocationAlt fontSize="60px" />
              <Text color="#47be9b" fontSize="25px">
                Add New Address
              </Text>
            </Box>
          </Box>
        </Box>

        <Drawer
          placement={"left"}
          onClose={onClose}
          isOpen={isOpen}
          size={"sm"}
        >
          <DrawerOverlay />
          {!drawer ? (
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px" p="0px">
                <Image src={map} />
                <ArrowBackIcon
                  onClick={onClose}
                  fontSize="30px"
                  position="absolute"
                  top="12px"
                  left="12px"
                  cursor="pointer"
                />
              </DrawerHeader>
              <DrawerBody padding="0px">
                <Image src={searchAddress} />
                <Text fontSize="18px" fontWeight="500" margin="20px">
                  Select Delivery Address
                </Text>
                <Box
                  color="#47be9b"
                  margin="20px"
                  gap="20px"
                  display="flex"
                  cursor="pointer"
                  onClick={() => setDrawer(true)}
                >
                  <AiFillPlusCircle fontSize="30px" />
                  <Text>Add Address</Text>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  borderTop="1px solid black"
                  borderBottom="1px solid black"
                  padding="20px 10px"
                >
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="start"
                    gap="20px"
                  >
                    <GrLocation />
                    <Box margin="-10px 0px">
                      <Text>abc</Text>
                      <Text>1,2,3</Text>
                    </Box>
                    <CheckCircleIcon
                      color="#47be9b"
                      backgroundColor="#eff9f7"
                    />
                  </Box>
                  <FiMoreVertical />
                </Box>
              </DrawerBody>
            </DrawerContent>
          ) : (
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px" p="0px">
                <ArrowBackIcon
                  onClick={() => setDrawer(false)}
                  fontSize="30px"
                  position="absolute"
                  top="12px"
                  left="12px"
                  cursor="pointer"
                />
              </DrawerHeader>
              <DrawerBody padding="0px">
                <Heading margin="20px" marginTop="50px" fontSize="20px">
                  Address
                </Heading>
                <form onSubmit={hadnleSubmit}>
                  <MyInput
                    type="text"
                    placeholder="Complete Address..."
                    name="completeAddress"
                    value={formData.completeAddress}
                    onChange={handleChange}
                    style={{ padding: "30px 10px" }}
                  />
                  <MyInput
                    type="text"
                    placeholder="Door / Flat No."
                    name="flatNo"
                    value={formData.flatNo}
                    onChange={handleChange}
                  />
                  <MyInput
                    type="text"
                    placeholder="Building"
                    name="building"
                    value={formData.building}
                    onChange={handleChange}
                  />
                  <MyInput
                    type="text"
                    placeholder="How to Reach"
                    name="howToReach"
                    value={formData.howToReach}
                    onChange={handleChange}
                  />
                  <RadioGroup
                    name="type"
                    onChange={(e) => setFormData({ ...formData, type: e })}
                  >
                    <Stack
                      spacing={4}
                      direction="row"
                      display="flex"
                      justifyContent="center"
                      gap="10px"
                      padding="10px"
                    >
                      <Box
                        border="1px solid gray"
                        padding="5px 16px"
                        borderRadius="5px"
                      >
                        <Radio value="Home">Home</Radio>
                      </Box>
                      <Box
                        border="1px solid gray"
                        padding="5px 16px"
                        borderRadius="5px"
                      >
                        <Radio value="Office">Office</Radio>
                      </Box>
                      <Box
                        border="1px solid gray"
                        padding="5px 16px"
                        borderRadius="5px"
                      >
                        <Radio value="Other">Other</Radio>
                      </Box>
                    </Stack>
                  </RadioGroup>
                  <button
                    style={{
                      backgroundColor: "#43c6ac",
                      color: "white",
                      width: "400px",
                      padding: "20px 20px 20px 50px",
                      display: "flex",
                      margin: "10px auto",
                      fontSize: "18px",
                      fontWeight: "500",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    SAVE ADDRESS AND PROCEED
                  </button>
                </form>
              </DrawerBody>
            </DrawerContent>
          )}
        </Drawer>

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
            fontWeight="500"
            color="#43c6ac"
          >
            <Text>Price Savings</Text>
            <Box display="flex" flexDirection="row" alignItems="center">
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
                <Text>{`${getCartItems.withDiscountPrice + 30}`}</Text>
              </Box>
            </Box>
            <Heading fontSize="19px" fontWeight="500" cursor="pointer">
              SELECT DELIVERY SLOT
            </Heading>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutCart;
