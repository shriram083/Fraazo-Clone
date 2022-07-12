import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  Flex,
  Image,
  Spinner,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItemAPI,
  removeItemFromCartAPI,
  updateCartItemAPI,
} from "../../store/cart/cart.actions";

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

const CartFlex = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 20px;
`;
const ImageDiv = styled.div`
  border-radius: 4px;
  background: #f9f9f9;
  border: 1px solid #eee;
  padding: 5px;
  & img {
    display: block;
    height: 100%;
  }
`;
const HeadingFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h1 {
    font-size: 13px;
    font-weight: 450;

    line-height: 15px;
  };
  & p{
    font-size: 13px
    font-weight: 400

    line-weight: 17px
  };
  & h2{
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
  }
`;
const RemoveFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & h1 {
    font-size: 12px;
    font-weight: 400;
    text-decoration: underline;

    line-height: 15px;
    text-align: right;
  }
  & h2 {
    font-size: 16px;
    font-weight: 100;
    color: #cb3454;
  }
`;

const CartProduct = ({ cartItem }) => {
  const dispatch = useDispatch();
  const {
    data: cartData,
    getCartItems,
    addCartItem,
    updateCartItem,
  } = useSelector((state) => state.cart);
  // console.log("cart items:", cartItem);

  const handleUpdate = (id, value) => {
    console.log("update state", id, value);
    // let update = cartData.filter((data) => data.productId == id);
    // console.log("update state", id, value, update);
    // console.log("update state",cartData,cartItem);

    if (value == 0) {
      dispatch(removeItemFromCartAPI(id));
    } else {
      const payload = {
        cartId: id,
        _productId: id,
        newCount: value,
      };
      dispatch(updateCartItemAPI(payload));
    }
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCartAPI(id));
  };

  useEffect(() => {
    dispatch(getCartItemAPI());
  }, []);
  return (
    <Box>
      <Flex height={"100px"}>
        <Box
          w={"77px"}
          h={"77px"}
          p={"5px"}
          bg={"#f9f9f9"}
          border={"1px solid #eee"}
          rounded={"4px"}
        >
          <Image src={cartItem?.imgUrl} height={"100%"} />
        </Box>
        <Box flex={1} pl={"15px"}>
          <Flex justifyContent={"space-between"}>
            <Box
              fontSize="13px"
              lineHeight={"15px"}
              fontWeight="500"
              overflow={"hidden"}
              textOverflow="ellipsis"
              height={"30px"}
            >
              <Text color={"black"}>{cartItem?.name}</Text>
            </Box>
            <Box
              fontSize="13px"
              lineHeight={"15px"}
              fontWeight="400"
              textDecor={"underline"}
              height={"30px"}
              color={"#666"}
              cursor={"pointer"}
              pl={"20px"}
              _hover={{ color: "red.300" }}
              onClick={() => handleRemoveFromCart(cartItem._id)}
            >
              <Text>Remove</Text>
            </Box>
          </Flex>
          <Box
            fontSize={"13px"}
            lineHeight={"17px"}
            w="100%"
            pt={"5px"}
            mb={"4px"}
          >
            <Flex justifyContent={"flex-start"} gap={2} alignItems={"center"}>
              <Text>{cartItem?.packSize}</Text>
              {cartItem?.tooltipText && (
                <Tooltip
                  hasArrow
                  label={cartItem?.tooltipText}
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
          </Box>
          <Flex justifyContent={"space-between"}>
            <Flex gap={2} fontSize="16px" m="0 !important" fontWeight={500}>
              {/* {cartItem?.strikePrice ? (
                <Text color={"black"}>₹{cartItem?.strikePrice}</Text>
              ) : ( */}
                <Text color={"black"}>₹{cartItem?.price}</Text>
              {/* )} */}
              <Text as="s" color={"#828282"}>
                {cartItem?.strikePrice ? `₹${cartItem?.strikePrice}` : ""}
              </Text>
            </Flex>
            <Stack>
              {!!cartItem?.soldOut ? (
                <Text color={"red.300"}>Out of Stock</Text>
              ) : (
                <Flex>
                  <CartDec
                    onClick={() =>
                      handleUpdate(cartItem?._id, Number(cartItem?.count) - 1)
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
                    updateCartItem?._id === cartItem?._id ? (
                      <CardCount>
                        <Spinner speed="0.65s" size="xs" />
                      </CardCount>
                    ) : (
                      <CardCount>{cartItem?.count}</CardCount>
                    )}
                  </Tooltip>

                  <CartInc
                    disabled={cartItem?.count >= 5}
                    onClick={() => {
                      handleUpdate(cartItem?._id, Number(cartItem?.count) + 1);
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </CartInc>
                </Flex>
              )}
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CartProduct;
