import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Flex,
  Image,
  Spinner,
  Text,
  Tooltip,
  Stack,
} from "@chakra-ui/react";
import {
  addItemToCartAPI,
  removeItemFromCartAPI,
  updateCartItemAPI,
} from "../store/cart/cart.actions";
import { Link } from "react-router-dom";

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
  min-width: 80px;
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

const SingleProduct = ({ item, onClose, setQuery }) => {
  const [countValue, setCountValue] = useState(0);

  const dispatch = useDispatch();
  const {
    data: cartData,
    getCartItems,
    addCartItem,
    updateCartItem,
  } = useSelector((state) => state.cart);

  const handleAddToCart = (item) => {
    const addData = {
      _productId: item._id,
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
    let ans = cartData.filter((data) => data._productId == item._id);
    // console.log("ans is:", ans);
    if (ans.length === 0) {
      dispatch(addItemToCartAPI(addData));
    }
  };

  const handleUpdate = (id, value) => {
    let update = cartData.filter((data) => data._productId == id);

    if (value == 0) {
      dispatch(removeItemFromCartAPI(update[0]._id));
    } else if (update.length !== 0) {
      const payload = {
        cartId: update[0]._id,
        _productId: update[0]._productId,
        newCount: value,
      };

      dispatch(updateCartItemAPI(payload));
    }
  };

  //Below useEffect is used to fetch count of cart item
  useEffect(() => {
    const getCount = () => {
      let ans = cartData.filter((data) => data._productId == item._id);
      return ans[0] ? ans[0]?.count : 0;
    };

    setCountValue(Number(getCount()));
  }, [item, cartData]);

  return (
    <Box
      key={item._id}
      borderTop={"1px solid #f1f1f1"}
      p={"10px 30px 10px 20px"}
    >
      <Flex
        // justifyContent={"space-between"}
        alignItems={"center"}
        gap={3}
      >
        <Link
          to={`/products/${item._id}`}
          style={{ textDecoration: "none" }}
          onClick={() => {
            onClose();
            setQuery("");
          }}
        >
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            // gap={2}
          >
            <Box pr={"20px"}>
              <Box
                w={"66px"}
                h={"66px"}
                p={"5px"}
                bg={"#f9f9f9"}
                border={"1px solid #eee"}
                rounded={"4px"}
              >
                <Image src={item?.imgUrl} height={"100%"} />
              </Box>
            </Box>

            <Box
              fontSize="13px"
              lineHeight={"15px"}
              fontWeight="500"
              overflow={"hidden"}
              textOverflow="ellipsis"
              textAlign={"left"}
              w={"150px"}
              p={"0 5px"}
            >
              <Text color={"black"}>{item?.name}</Text>
            </Box>

            <Flex
              gap={2}
              fontSize="15px"
              m="0 !important"
              fontWeight={500}
              w={"100px"}
              p={"0 5px"}
            >
              <Text color={"black"}>₹ {item?.price}</Text>
              <Text as="s" color={"#828282"}>
                {item?.strikePrice ? `₹ ${item?.strikePrice}` : ""}
              </Text>
            </Flex>

            <Flex
              justifyContent={"flex-start"}
              gap={2}
              alignItems={"center"}
              w={"90px"}
              p={"0 5px"}
            >
              <Text fontSize={"14px"}>{item?.packSize}</Text>
              {item?.tooltipText && (
                <Tooltip
                  hasArrow
                  label={item?.tooltipText}
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
          </Flex>
        </Link>

        <Flex justifyContent={"space-between"} w={"82px"}>
          <Stack>
            {!!item?.soldOut ? (
              <Text fontSize={"13px"} color={"red.300"}>
                Out of Stock
              </Text>
            ) : (
              <Flex justifyContent="center" alignItems={"center"}>
                <Stack>
                  {countValue == 0 ? (
                    <AddToCartBtn
                      key={item.id}
                      onClick={() => handleAddToCart(item)}
                    >
                      {addCartItem.loading && addCartItem._id === item._id ? (
                        <Spinner speed="0.65s" size="xs" />
                      ) : (
                        <Flex>
                          <CartPlusIcon className="fa-solid fa-cart-plus"></CartPlusIcon>
                          ADD
                        </Flex>
                      )}
                    </AddToCartBtn>
                  ) : (
                    <Flex>
                      <CartDec
                        onClick={() =>
                          handleUpdate(item?._id, Number(countValue) - 1)
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
                        {updateCartItem?.loading &&
                        updateCartItem?._id == item?._id ? (
                          <CardCount>
                            <Spinner speed="0.65s" size="xs" />
                          </CardCount>
                        ) : (
                          <CardCount>{countValue}</CardCount>
                        )}
                      </Tooltip>

                      <CartInc
                        disabled={countValue >= 5}
                        onClick={() => {
                          handleUpdate(item?._id, Number(countValue) + 1);
                        }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </CartInc>
                    </Flex>
                  )}
                </Stack>
              </Flex>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SingleProduct;
