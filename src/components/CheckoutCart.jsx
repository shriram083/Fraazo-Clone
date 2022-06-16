import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TbCurrencyRupee, TbDiscount2 } from "react-icons/tb";
import { ChevronRightIcon } from "@chakra-ui/icons";

const CheckoutCart = () => {
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
            Cart Items : 1
          </Heading>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image
              src="https://images.fraazo.com/fraazo-master/BONI11.png/tr:w-256,h-256"
              height="200px"
              width="200px"
            />
            <Box>
              <Text>Onion</Text>
              <Text>1 kg</Text>
            </Box>
            <Box
              display="flex"
              gap="20px"
              flexDirection="row"
              alignItems="center"
            >
              <Button>-</Button>
              <Text>1</Text>
              <Button>+</Button>
            </Box>
            <Text>Rs.16</Text>
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
            <Heading fontSize="18px">SELECT ADDRESS</Heading>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CheckoutCart;
