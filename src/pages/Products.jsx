import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllProductsLayout from "../components/AllProductsLayout";
import {
  getCombosFruitsAPI,
  getExoticFruitsAPI,
  getFreshFruitsAPI,
} from "../store/products/products.actions";

const Products = () => {
  const initialData = [
    {
      id: 1,
      imgUrl:
        "https://images.fraazo.com/fraazo-prod/products/product_images/000/000/599/original/data/tr:w-256,h-256",
      name: "Pumpkin Disco",
      packSize: "250 g",
      price: 20,
      strikePrice: "",
      soldOut: "",
      notifyme: "",
      category: "vegetables",
      subCatagory: "dailyVeggies",
      tooltipText: "",
      benefits: "",
      description: "",
      info: "",
    },
    {
      id: 2,
      imgUrl:
        "https://images.fraazo.com/fraazo-prod/images/images/000/006/624/original/data/tr:w-256,h-256",
      name: "Lady's Finger (Bhindi / Okra / Bhendi) / Bhinda,Vendaikk...",
      packSize: "500 g",
      price: 12,
      strikePrice: 28,
      soldOut: "",
      notifyme: "",
      category: "vegetables",
      subCatagory: "dailyVeggies",
      tooltipText: "",
      benefits: "",
      description: "",
      info: "",
    },
    {
      id: 3,
      imgUrl:
        "https://images.fraazo.com/fraazo-master/VBEE12.png/tr:w-256,h-256",
      name: "Beetroot",
      packSize: "500 g",
      price: 30,
      strikePrice: "",
      soldOut: "",
      notifyme: "",
      category: "vegetables",
      subCatagory: "dailyVeggies",
      tooltipText: "",
      benefits: "",
      description: "",
      info: "",
    },
    {
      id: 4,
      imgUrl:
        "https://images.fraazo.com/fraazo-master/VSUR12.png/tr:w-256,h-256",
      name: "Yam (Suran / Elephant Foot)",
      packSize: "500 g",
      price: 43,
      strikePrice: "",
      soldOut: "",
      notifyme: "",
      category: "vegetables",
      subCatagory: "dailyVeggies",
      tooltipText: "",
      benefits: "",
      description: "",
      info: "",
    },
    {
      id: 5,
      imgUrl:
        "https://images.fraazo.com/fraazo-master/BONI11.png/tr:w-256,h-256",
      name: "Onion",
      packSize: "1 kg",
      price: 11,
      strikePrice: 24,
      soldOut: "",
      notifyme: "",
      category: "vegetables",
      subCatagory: "dailyVeggies",
      tooltipText: "",
      benefits: "",
      description: "",
      info: "",
    },
  ];
  const [porductsData, setProductsData] = useState(initialData);
  const dispatch = useDispatch();
  const { combosFruits, exoticFruits, freshFruits } = useSelector(
    (state) => state.products
  );
  // console.log(freshFruits, combosFruits, exoticFruits);
  const handlegetFreshFruits = () => {
    // console.log("hii");
    if (freshFruits?.data?.length === 0) {
      dispatch(getFreshFruitsAPI());
    }
    setProductsData(freshFruits?.data);
  };
  const handlegetExoticFruits = () => {
    if (exoticFruits?.data?.length === 0) {
      dispatch(getExoticFruitsAPI());
    }
    setProductsData(exoticFruits?.data);
  };
  const handlegetCombosFruits = () => {
    if (combosFruits?.data?.length === 0) {
      dispatch(getCombosFruitsAPI());
    }
    setProductsData(combosFruits?.data);
  };
  return (
    <Box>
      {/* <Heading>Products</Heading> */}
      <Flex>
        <Box width={"220px"} pr="10px">
          <Accordion allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}

                      <Box flex="1" textAlign="left" ml={3}>
                        Mangoes
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>Mangoes</Text>
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}

                      <Box flex="1" textAlign="left" ml={3}>
                        Fruits
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                    onClick={handlegetFreshFruits}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>Fresh Fruits</Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                    onClick={handlegetExoticFruits}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>Exotic Fruits</Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                    onClick={handlegetCombosFruits}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>Fruit Combos</Text>
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}

                      <Box flex="1" textAlign="left" ml={3}>
                        Vegetables
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>Daily Veggies</Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>Exotic Vegetables</Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>{"Cuts, Peeled & Sprouts"}</Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>Vegetable Combos</Text>
                    </Flex>
                  </AccordionPanel>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>{"Herbs & Leafies"}</Text>
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}

                      <Box flex="1" textAlign="left" ml={3}>
                        Dry Fruits
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize="14px"
                    textAlign={"left"}
                    ml={2}
                  >
                    <Flex alignItems={"center"} justifyContent="left" gap={3}>
                      <i className="fa-solid fa-angle-right"></i>{" "}
                      <Text>Premium Quality Dry Fruits</Text>
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
        <Grid width={"100%"} pl="10px" border={"1px solid orange"} templateColumns='repeat(5, 1fr)' gap={6}>
          
          {porductsData?.map((product)=>(<AllProductsLayout product={product} key={product.id}/>))}
          
        </Grid>
      </Flex>
    </Box>
  );
};

export default Products;
