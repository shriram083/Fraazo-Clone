import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Payment from "../components/Payment";
import CheckoutCart from "../components/CheckoutCart";
import CheckoutAddress from "../components/CheckoutAddress";
import CheckoutDeliveryType from "../components/CheckoutDeliveryType";

const Checkout = () => {
  const [tabs, setTabs] = useState(0);

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
            <i
              className="fa-solid fa-cart-shopping"
              accessKey="1"
              onClick={(e) => {
                console.log(e.target.accessKey);
                setTabs(Number(e.target.accessKey));
              }}
            ></i>
          </Tab>
          <Tab
            color={tabs >= 2 ? "white" : "black"}
            backgroundColor={tabs >= 2 ? "green" : "white"}
          >
            <i
              className="fa-solid fa-location-dot"
              accessKey="2"
              onClick={(e) => {
                console.log(e.target.accessKey);
                setTabs(Number(e.target.accessKey));
              }}
            ></i>
          </Tab>
          <Tab
            color={tabs >= 3 ? "white" : "black"}
            backgroundColor={tabs >= 3 ? "green" : "white"}
          >
            <i
              className="fa-regular fa-calendar"
              accessKey="3"
              onClick={(e) => {
                console.log(e.target.accessKey);
                setTabs(Number(e.target.accessKey));
              }}
            ></i>
          </Tab>
          <Tab
            color={tabs >= 4 ? "white" : "black"}
            bgcolor={tabs >= 4 ? "green" : "white"}
          >
            <i
              className="fa-solid fa-wallet"
              accessKey="4"
              onClick={(e) => {
                console.log(e.target.accessKey);
                setTabs(Number(e.target.accessKey));
              }}
            ></i>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CheckoutCart />
          </TabPanel>
          <TabPanel>
            <CheckoutAddress />
          </TabPanel>
          <TabPanel>
            <CheckoutDeliveryType />
          </TabPanel>
          <TabPanel>
            <Payment />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Checkout;
