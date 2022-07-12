import React, { useEffect, useState } from "react";
import style from "./ProductLayout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBestDealsAPI,
  getSingleProductAPI,
} from "../store/products/products.actions";
import styled from "styled-components";
import ProductsSlider from "./SlidingComponent/ProductsSlider";

import {
  Text,
  Box,
  Flex,
  Tooltip,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Spinner,
  Divider,
  Skeleton,
} from "@chakra-ui/react";
import {
  addItemToCartAPI,
  getCartItemAPI,
  removeItemFromCartAPI,
  updateCartItemAPI,
} from "../store/cart/cart.actions";

//=======

const ToolTip = styled.i`
  font-size: 12px;
  cursor: pointer;
  color: #828282;
`;
const CartPlusIcon = styled.i`
  margin-right: 5px;
`;
const AddToCartBtn = styled.button`
  border-radius: 15px;
  background-color: #fff;
  color: #4fbb90;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  padding: 6px 16px;
  outline: 0;
  border: 1px solid #4fbb90;
  margin-left: 20px;
  width: 80px;
  &:hover {
    background-color: #4fbb90;
    color: #fff;
  }
`;

const CartDec = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 7px 4px 9px;
  color: #4fbb90;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  border: 1px solid #4fbb90;
  &:hover {
    background-color: #4fbb90;
    color: #fff;
  }
`;
const CartInc = styled.button`
  background-color: #fff;
  outline: 0;
  font-size: 10px;
  padding: 5px 9px 4px 7px;
  color: #4fbb90;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1px solid #4fbb90;
  &:hover {
    background-color: #4fbb90;
    color: #fff;
  }
`;
const CardCount = styled.div`
  width: 30px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding-top: 4px;
  text-align: center;
`;

//=======

const ProductLayout = () => {
  const dispatch = useDispatch();
  const [countValue, setCountValue] = useState(0);
  const { data: cartData, addCartItem } = useSelector((state) => state.cart);
  const { data: singleProduct, loading: singleProductLoading } = useSelector(
    (state) => state.products.singleProduct
  );
  const { data } = useSelector((state) => state.products.bestDeals);
  const { id } = useParams();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getSingleProductAPI(id));
    if (data?.length == 0) {
      dispatch(getBestDealsAPI());
    }
  }, [getSingleProductAPI, dispatch, id]);

  const handleAddToCart = (item) => {
    const addData = {
      productId: item.id,
      count: 1,
      imgUrl: item.imgUrl,
      name: item.name,
      packSize: item.packSize,
      price: item.price,
      strikePrice: item.strikePrice,
      soldOut: item.soldOut,
      notifyme: item.notifyme,
      category: item.category,
      subCatagory: item.subCatagory,
      tooltipText: item.tooltipText,
      benefits: item.benefits,
      description: item.description,
      info: item.info,
    };
    let ans = cartData.filter((data) => data.productId == item.id);
    // console.log("ans is:", ans);
    if (ans.length === 0) {
      dispatch(addItemToCartAPI(addData));
    }
  };

  const handleUpdate = (id, value) => {
    let update = cartData.filter((data) => data.productId == id);
    if (value == 0) {
      dispatch(removeItemFromCartAPI(update[0].id));
    } else if (update.length !== 0) {
      const payload = {
        cartId: update[0].id,
        newCount: value,
      };
      dispatch(updateCartItemAPI(payload));
    }
  };

  //Below useEffect is used to fetch count of cart item
  useEffect(() => {
    const getCount = () => {
      let ans = cartData.filter((data) => data.productId == singleProduct.id);
      return ans[0] ? ans[0]?.count : 0;
    };
    setCountValue(Number(getCount()));
  }, [singleProduct, cartData]);

  //Below useEffect is used to fetch all cart items
  useEffect(() => {
    dispatch(getCartItemAPI());
  }, [dispatch, getCartItemAPI]);

  return (
    <>
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
            <Flex gap={2} alignItems="center" ml="20px">
              <Text fontSize="13px" opacity={"0.7"}>
                {singleProduct?.packSize}
              </Text>
              {singleProduct?.tooltipText && (
                <Tooltip
                  hasArrow
                  label={singleProduct?.tooltipText}
                  bg="#666"
                  opacity={"0.5"}
                  color="white"
                  placement="top"
                  fontWeight={400}
                  fontSize="12px"
                >
                  <ToolTip className="fa-solid fa-circle-info"></ToolTip>
                </Tooltip>
              )}
            </Flex>
            <Flex alignItems="felxStart" gap="10px">
              <div className={style.price}>₹{singleProduct.price}</div>
              <div className={style.strikeprice}>
                {singleProduct.strikePrice
                  ? "₹" + singleProduct.strikePrice
                  : ""}
              </div>
            </Flex>
            {/* <Flex alignItems="felxStart">
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
          </Flex> */}
            {!!singleProduct?.soldOut ? (
              <Text
                ml={"20px"}
                textAlign={"left"}
                fontWeight={"500"}
                fontSize={"18px"}
                color={"red.300"}
              >
                {singleProduct?.soldOut}
              </Text>
            ) : (
              <Stack>
                {countValue == 0 ? (
                  <AddToCartBtn
                    key={singleProduct.id}
                    onClick={() => handleAddToCart(singleProduct)}
                  >
                    {addCartItem.loading ? (
                      <Spinner size="xs" />
                    ) : (
                      <CartPlusIcon className="fa-solid fa-cart-plus"></CartPlusIcon>
                    )}
                    ADD
                  </AddToCartBtn>
                ) : (
                  <Flex ml={"20px"}>
                    <CartDec
                      onClick={() =>
                        handleUpdate(singleProduct?.id, Number(countValue) - 1)
                      }
                    >
                      <i className="fa-solid fa-minus"></i>
                    </CartDec>
                    <Tooltip
                      hasArrow
                      label={`Max Qty 5`}
                      bg="#666"
                      opacity={"0.5"}
                      color="white"
                      placement="top"
                      fontWeight={400}
                      fontSize="12px"
                    >
                      <CardCount>{countValue}</CardCount>
                    </Tooltip>

                    <CartInc
                      disabled={countValue >= 5}
                      onClick={() => {
                        handleUpdate(singleProduct?.id, Number(countValue) + 1);
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </CartInc>
                  </Flex>
                )}
              </Stack>
            )}
          </div>
          <div className={style.tabs}>
            <hr className={style.hr}></hr>
            <Tabs>
              <TabList borderBottom={"none"}>
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
                      : singleProduct.name}
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    {singleProduct.benefits.length !== 0
                      ? singleProduct.benefits
                      : "No details available"}
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    {singleProduct.info.length
                      ? singleProduct.info
                      : "No details available"}
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
      <Box p={"0 40px"}>
        <Text fontSize="4xl" opacity="0.7" align="left" ml="5px">
          BEST DEALS
        </Text>
        <Divider orientation="horizontal" borderColor="gray" w="99%" m="auto" />
        {data ? <ProductsSlider data={data} /> : <></>}
      </Box>
    </>
  );
};
export default ProductLayout;
