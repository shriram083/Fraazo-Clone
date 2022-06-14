import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";

const CartIcon = styled.i`font-size=40px; cursor:pointer; `;
const Checkout = () => {
  const [tabs, setTabs] = useState(0);

  const handleTabs = (e) => {
    // setTabs(Number(e.target));
    console.log(e.target.accessKey);
  };
  return (
    <div>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList
          display="flex"
          justifyContent="space-around"
          width="500px"
          margin="auto"
        >
          <Tab
            color={tabs >= 1 ? "white" : "black"}
            backgroundColor={tabs >= 1 ? "green" : "white"}
          >
            <CartIcon
              className="fa-solid fa-cart-shopping"
              accessKey="1"
              onClick={(e) => {
                console.log(e.target.accessKey);
                setTabs(Number(e.target.accessKey));
              }}
            ></CartIcon>
          </Tab>
          <Tab
            color={tabs >= 2 ? "white" : "black"}
            backgroundColor={tabs >= 2 ? "green" : "white"}
          >
            <CartIcon
              className="fa-solid fa-location-dot"
              accessKey="2"
              onClick={(e) => {
                console.log(e.target.accessKey);
                setTabs(Number(e.target.accessKey));
              }}
            ></CartIcon>
          </Tab>
          <Tab
            color={tabs >= 3 ? "white" : "black"}
            backgroundColor={tabs >= 3 ? "green" : "white"}
          >
            <CartIcon
              className="fa-regular fa-calendar"
              accessKey="3"
              onClick={(e) => {
                console.log(e.target.accessKey);
                setTabs(Number(e.target.accessKey));
              }}
            ></CartIcon>
          </Tab>
          <Tab
            color={tabs >= 4 ? "white" : "black"}
            bgcolor={tabs >= 4 ? "green" : "white"}
          >
            <CartIcon
              className="fa-solid fa-wallet"
              accessKey="4"
              onClick={(e) => {
                console.log(e.target.accessKey);
                setTabs(Number(e.target.accessKey));
              }}
            ></CartIcon>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
              <Box>Bill Details</Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>Three!</p>
          </TabPanel>
          <TabPanel>
            <p>Four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Checkout;
