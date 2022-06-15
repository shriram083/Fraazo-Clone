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
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocation} from "react-router-dom";
import AllProductsLayout from "../components/AllProductsLayout";
import {
  getCombosFruitsAPI,
  getCombosVegetablesAPI,
  getCutsPeeledAPI,
  getDailyVegetablesAPI,
  getDryFruitsAPI,
  getExoticFruitsAPI,
  getExoticVegetablesAPI,
  getFreshFruitsAPI,
  getHerbsLeafsAPI,
  getMangoesAPI,
} from "../store/products/products.actions";
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
    imgUrl: "https://images.fraazo.com/fraazo-master/VBEE12.png/tr:w-256,h-256",
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
    imgUrl: "https://images.fraazo.com/fraazo-master/VSUR12.png/tr:w-256,h-256",
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
    imgUrl: "https://images.fraazo.com/fraazo-master/BONI11.png/tr:w-256,h-256",
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
const Products = () => {
  const [porductsData, setProductsData] = useState(initialData);
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  // console.log(location);

  const {
    mangoes,
    combosFruits,
    exoticFruits,
    freshFruits,
    dailyVegetables,
    exoticVegetables,
    cutsPeeled,
    combosVegetables,
    herbsLeafs,
    dryFruits,
  } = useSelector((state) => state.products);
  // console.log(dryFruits.data);
  const handlegetMangoes = (value) => {
    if (mangoes?.data?.length === 0) {
      dispatch(getMangoesAPI());
    }
    setSelected(value ? value : "Mangoes");
    setProductsData(mangoes?.data);
  };
  const handlegetFreshFruits = (value) => {
    if (freshFruits?.data?.length === 0) {
      dispatch(getFreshFruitsAPI());
    }
    setSelected(value);
    setProductsData(freshFruits?.data);
  };
  const handlegetExoticFruits = (value) => {
    if (exoticFruits?.data?.length === 0) {
      dispatch(getExoticFruitsAPI());
    }
    setSelected(value);
    setProductsData(exoticFruits?.data);
  };
  const handlegetCombosFruits = (value) => {
    if (combosFruits?.data?.length === 0) {
      dispatch(getCombosFruitsAPI());
    }
    setSelected(value);
    setProductsData(combosFruits?.data);
  };
  const handlegetDailyVeggies = (value) => {
    if (dailyVegetables?.data?.length === 0) {
      dispatch(getDailyVegetablesAPI());
    }
    setSelected(value);
    setProductsData(dailyVegetables?.data);
  };
  const handlegetExoticVegetable = (value) => {
    if (exoticVegetables?.data?.length === 0) {
      dispatch(getExoticVegetablesAPI());
    }
    setSelected(value);
    setProductsData(exoticVegetables?.data);
  };
  const handlegetCutsPeeled = (value) => {
    if (cutsPeeled?.data?.length === 0) {
      dispatch(getCutsPeeledAPI());
    }
    setSelected(value);
    setProductsData(cutsPeeled?.data);
  };
  const handlegetVegetableCombos = (value) => {
    if (combosVegetables?.data?.length === 0) {
      dispatch(getCombosVegetablesAPI());
    }
    setSelected(value);
    setProductsData(combosVegetables?.data);
  };
  const handlegetHerbsLeafies = (value) => {
    if (herbsLeafs?.data?.length === 0) {
      dispatch(getHerbsLeafsAPI());
    }
    setSelected(value);
    setProductsData(herbsLeafs?.data);
  };
  const handlegetDryFruits = (value) => {
    if (dryFruits?.data?.length === 0) {
      dispatch(getDryFruitsAPI());
    }
    setSelected(value);
    setProductsData(dryFruits?.data);
  };
  console.log("selected", selected);

  useEffect(() => {
    if (mangoes?.data?.length === 0) {
      dispatch(getMangoesAPI());
    }
    if (freshFruits?.data?.length === 0) {
      dispatch(getFreshFruitsAPI());
    }
    if (exoticFruits?.data?.length === 0) {
      dispatch(getExoticFruitsAPI());
    }
    if (combosFruits?.data?.length === 0) {
      dispatch(getCombosFruitsAPI());
    }
    if (combosFruits?.data?.length === 0) {
      dispatch(getCombosFruitsAPI());
    }
    if (dailyVegetables?.data?.length === 0) {
      dispatch(getDailyVegetablesAPI());
    }
    if (exoticVegetables?.data?.length === 0) {
      dispatch(getExoticVegetablesAPI());
    }
    if (cutsPeeled?.data?.length === 0) {
      dispatch(getCutsPeeledAPI());
    }
    if (combosVegetables?.data?.length === 0) {
      dispatch(getCombosVegetablesAPI());
    }
    if (herbsLeafs?.data?.length === 0) {
      dispatch(getHerbsLeafsAPI());
    }
    if (dryFruits?.data?.length === 0) {
      dispatch(getDryFruitsAPI());
    }
  }, []);
  const sideMenu = [
    {
      category: "Mangoes",
      subCategory: [{ item: "Mangoes", getProduct: handlegetMangoes }],
    },
    {
      category: "Fruits",
      subCategory: [
        { item: "Fresh Fruits", getProduct: handlegetFreshFruits },
        { item: "Exotic Fruits", getProduct: handlegetExoticFruits },
        { item: "Fruit Combos", getProduct: handlegetCombosFruits },
      ],
    },
    {
      category: "Vegetables",
      subCategory: [
        { item: "Daily Veggies", getProduct: handlegetDailyVeggies },
        { item: "Exotic Vegetables", getProduct: handlegetExoticVegetable },
        { item: "Cuts, Peeled & Sprouts", getProduct: handlegetCutsPeeled },
        { item: "Vegetable Combos", getProduct: handlegetVegetableCombos },
        { item: "Herbs & Leafies", getProduct: handlegetHerbsLeafies },
      ],
    },
    {
      category: "Dry Fruits",
      subCategory: [
        {
          item: "Premium Quality Dry Fruits",
          getProduct: handlegetDryFruits,
        },
      ],
    },
  ];
  // console.log("menu",sideMenu[0].subCategory[0].item)
  return (
    <Box p={"0 40px"}>
      {/* <Heading>Products</Heading> */}
      <Flex>
        <Box width={"220px"} pr="10px">
          <Accordion allowToggle>
            {sideMenu.map((item) => (
              <AccordionItem
                key={item.category}
                border={"none"}
                borderBottom={"1px solid #eee"}
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" color={"#4fbb90"} />
                        ) : (
                          <AddIcon fontSize="12px" color={"#4fbb90"} />
                        )}

                        <Box
                          flex="1"
                          textAlign="left"
                          ml={3}
                          onClick={() =>
                            item.subCategory[0].getProduct(
                              item.subCategory[0].item
                            )
                          }
                          cursor="pointer"
                        >
                          {item.category}
                        </Box>
                      </AccordionButton>
                    </h2>
                    {item.subCategory.map((subItem) => (
                      <AccordionPanel
                        key={subItem.item}
                        pb={4}
                        fontSize="14px"
                        textAlign={"left"}
                        ml={2}
                        border={"1px solid #eee"}
                        borderLeft={"none"}
                        onClick={() => subItem.getProduct(subItem.item)}
                        cursor="pointer"
                      >
                        <Flex
                          alignItems={"center"}
                          justifyContent="left"
                          gap={3}
                        >
                          <i className="fa-solid fa-angle-right"></i>{" "}
                          <Text>{subItem.item}</Text>
                        </Flex>
                      </AccordionPanel>
                    ))}
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
        <Box width={"100%"} pl="10px">
          <Text
            textAlign={"left"}
            fontWeight={600}
            fontSize="16px"
            pb={"10px"}
            color={"black"}
          >
            {selected}
          </Text>
          <Grid
            width={"100%"}
            // border={"1px solid orange"}
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            {porductsData?.map((product) => (
              <AllProductsLayout product={product} key={product.id} />
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Products;

{
  /* <AccordionItem>
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
            </AccordionItem> */
}
