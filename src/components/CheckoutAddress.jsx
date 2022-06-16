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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import map from "../assets/mapImage.png";
import searchAddress from "../assets/searchAddress.png";
import { TbCurrencyRupee, TbDiscount2 } from "react-icons/tb";
import { TiLocation } from "react-icons/ti";
import { GrLocation } from "react-icons/gr";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { ArrowBackIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const CheckoutCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <Button bg="none" color="#47be9b">
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
              <Box color="#47be9b" margin="20px" gap="20px" display="flex">
                <AiFillPlusCircle fontSize="30px" />
                <Text>Add Address</Text>
              </Box>
              <Box>
                <GrLocation />
              </Box>
            </DrawerBody>
          </DrawerContent>
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
            <Text>1 x Total Item Price</Text>
            <Box display="flex" flexDirection="row" alignItems="center">
              <TbCurrencyRupee />
              <Text>24</Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>Price Savings</Text>
            <Box display="flex" flexDirection="row" alignItems="center">
              -<TbCurrencyRupee />
              <Text>8</Text>
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
              <Text>16</Text>
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
            <Text>To Pay (Saved 8 )</Text>
            <Box display="flex" flexDirection="row" alignItems="center">
              <TbCurrencyRupee />
              <Text>46</Text>
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
                <Text>46</Text>
              </Box>
            </Box>
            <Heading fontSize="19px" fontWeight="500">
              SELECT DELIVERY SLOT
            </Heading>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutCart;
