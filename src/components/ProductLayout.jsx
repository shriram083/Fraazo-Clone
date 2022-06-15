import React, { useEffect } from "react";
import style from "./ProductLayout.module.css";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAPI } from "../store/products/products.actions";

import {
  Box,
  Flex,
  Tooltip,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const ProductLayout = () => {
  const dispatch = useDispatch();

  const { singleProduct } = useSelector((state) => state.products);
  console.log(singleProduct, "from product layout page");
  const { id } = useParams();

  useEffect(() => {
    getSingleProductAPI(id, dispatch);
  }, []);

  const addToCarthandler = () => {
    //Sold out for Now
    if (singleProduct.soldOut === "Sold out for Now") {
      alert("Already sold out");
      return;
    }
    console.log("adding to cart", singleProduct);
  };

  return (
    <div className={style.details_container}>
      <div className={style.imgContainer}>
        <img
          src={singleProduct.imgUrl}
          alt="an_images"
          className={style.productImage}
        />
      </div>
      <div className={style.details}>
        <div className="data">
          <h1 className={style.productname}>{singleProduct.name}</h1>
          <Flex alignItems="felxStart" gap="10px">
            <span className={style.qty}>1 pc </span>
            <Tooltip hasArrow label="1.5 to 2.7 kg" bg="gray.300" color="black">
              <InfoOutlineIcon w="20px" h="20px" />
            </Tooltip>
          </Flex>
          <Flex alignItems="felxStart" gap="10px">
            <div className={style.price}>₹{singleProduct.price}</div>
            <div className={style.strikeprice}>
              {singleProduct.strikePrice ? "₹" + singleProduct.strikePrice : ""}
            </div>
          </Flex>
          <Flex alignItems="felxStart">
            <Button colorScheme="white" color="teal" onClick={addToCarthandler}>
              <div className={style.cartbtn}>
                <img
                  className={style.cartimg}
                  src="https://img.icons8.com/plasticine/344/shopping-cart-loaded.png"
                  alt=""
                />
                ADD
              </div>
            </Button>
          </Flex>
        </div>
        <div className={style.tabs}>
          <hr className={style.hr}></hr>
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Benifits</Tab>
              <Tab>Info</Tab>
            </TabList>
            <TabPanels
              className={style.tabColor}
              h="200px"
              borderBottomLeftRadius="20px"
              borderBottomRightRadius="20px"
            >
              <TabPanel>
                <p>
                  {singleProduct.description.length !== 0
                    ? singleProduct.description
                    : "no details available"}
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  {singleProduct.benefits.length !== 0
                    ? singleProduct.benefits
                    : "no details available"}
                </p>
              </TabPanel>
              <TabPanel>
                <p>
                  {singleProduct.info.length !== 0
                    ? singleProduct.info
                    : "no details available"}
                </p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
