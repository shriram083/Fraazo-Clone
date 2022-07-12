import React, { useState } from "react";
import CartProduct from "./CartProduct";
import cartEmpty from "../../assets/emptyCart.png";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Image,
  Box,
  Text,
  DrawerFooter,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCartItemAPI } from "../../store/cart/cart.actions";
const AddCartFlex = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  padding-left: 24px;
  background: white;
  justify-content: space-between;
  opacity: 1;
  z-index: 1;

  box-shadow: 0 -2px 5px -3px rgb(0 0 0 / 20%);
  border-top: 1px solid #e7e7e7;
  margin-left: -24px;
  & div {
    display: flex;
    flex-direction: column;
  }
`;
const CartComponent = ({ isOpen, onOpen, onClose }) => {
  const size = "sm";
  const { data: cartData, getCartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("total:", getCartItems.withoutDiscountPrice);
  // console.log("discount:", getCartItems.withDiscountPrice);
  useEffect(() => {
    dispatch(getCartItemAPI());
  }, [dispatch, getCartItemAPI]);
  return (
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`My Cart (${cartData.length} items)`}</DrawerHeader>
          {cartData.length == 0 ? (
            <DrawerBody textAlign={"center"}>
              <Flex justifyContent={"center"}>
                <Image h={"250px"} w={"250px"} src={cartEmpty} />
              </Flex>
              <Box
                pt={"30px"}
                fontSize={"20px"}
                lineHeight="25px"
                fontWeight={700}
              >
                Whoops... Cart is empty
              </Box>
              <Box
                pt={"10px"}
                color={"#999"}
                fontSize={"16px"}
                lineHeight="20px"
                fontWeight={500}
                w={"265px"}
                m={"auto"}
              >
                Add some fruits, veggies and dairy products to your cart. Let's
                Shop!
              </Box>
              <Button
                fontSize={"15px"}
                lineHeight="20px"
                fontWeight={700}
                colorScheme="teal"
                variant="solid"
                rounded={"50px"}
                mt={"30px"}
                onClick={() => onClose()}
              >
                Let's Shop!
              </Button>
            </DrawerBody>
          ) : (
            <>
              <DrawerBody>
                {/* pass props in cartProduct */}
                {cartData?.map((cartItem) => (
                  <CartProduct key={cartItem._id} cartItem={cartItem} />
                ))}
              </DrawerBody>
              <DrawerFooter p={"0"}>
                <AddCartFlex>
                  <Box lineHeight={"20px"} fontWeight={500} fontSize={"16px"}>
                    <Text>{cartData.length} items</Text>
                    {getCartItems.loading ? (
                      <Spinner color="red.500" />
                    ) : (
                      <Text color={"#ff6d11"}>
                        {`₹ ${getCartItems.withDiscountPrice}`}{" "}
                      </Text>
                    )}
                  </Box>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    color={"white"}
                    marginRight={"20px"}
                    background="#5bc8ae"
                    _hover={{ color: "white", background: "#5bc8ae" }}
                    onClick={() => {
                      navigate("/checkout");
                      onClose();
                    }}
                  >
                    CHECKOUT
                  </Button>
                </AddCartFlex>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default CartComponent;
