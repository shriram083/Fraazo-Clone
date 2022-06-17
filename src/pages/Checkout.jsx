import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import Payment from "../components/Payment";
import CheckoutCart from "../components/CheckoutCart";
import CheckoutAddress from "../components/CheckoutAddress";
import CheckoutDeliveryType from "../components/CheckoutDeliveryType";
import { useSelector } from "react-redux";
import emptyCart from "../assets/emptyCartCheckout.png";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [tabs, setTabs] = useState(0);
  const { data: cartData } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      {cartData.length === 0 ? (
        <Box>
          <Image src={emptyCart} margin="10px auto" />
          <Button
            _hover={{ backgroundColor: "#28ab91" }}
            color="white"
            backgroundColor="#43c6ac"
            padding="30px"
            margin="20px"
            borderRadius="10px"
            fontSize="20px"
            fontWeight="500"
            width="300px"
            onClick={() => {
              navigate("/");
            }}
          >
            Start Shopping
          </Button>
        </Box>
      ) : (
        <Tabs variant="soft-rounded" colorScheme="green">
          <Box backgroundColor="#eff9f7" padding="30px">
            <TabList
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              width="500px"
              margin="auto"
            >
              <Tab
                color={tabs >= 1 ? "white" : "black"}
                backgroundColor={tabs >= 1 ? "#5dc6ad" : "white"}
                padding="20px"
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
              <Box
                border={tabs >= 2 ? "0.5px solid green" : "0.5px dashed green"}
                margin="0px"
                width="100px"
                height="1px"
              ></Box>
              <Tab
                color={tabs >= 2 ? "white" : "black"}
                backgroundColor={tabs >= 2 ? "#5dc6ad" : "white"}
                padding="20px 22px"
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
              <Box
                border={tabs >= 3 ? "0.5px solid green" : "0.5px dashed green"}
                margin="0px"
                width="100px"
                height="1px"
              ></Box>
              <Tab
                color={tabs >= 3 ? "white" : "black"}
                backgroundColor={tabs >= 3 ? "#5dc6ad" : "white"}
                padding="20px"
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
              <Box
                border={tabs >= 4 ? "0.5px solid green" : "0.5px dashed green"}
                margin="0px"
                width="100px"
                height="1px"
              ></Box>
              <Tab
                color={tabs >= 4 ? "white" : "black"}
                backgroundColor={tabs >= 4 ? "#5dc6ad" : "white"}
                padding="20px"
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
          </Box>
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
      )}
    </div>
  );
};

export default Checkout;
