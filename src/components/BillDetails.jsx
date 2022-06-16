import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { TbCurrencyRupee } from "react-icons/tb";

export const BillDetails = () => {
  return (
    <div>
      <Box
        boxShadow="xs"
        width="auto"
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
          color='green'
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
      </Box>
    </div>
  );
};
