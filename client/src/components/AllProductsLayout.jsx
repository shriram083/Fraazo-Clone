import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Tooltip,
  Spinner,
  Skeleton,
} from "@chakra-ui/react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCartAPI,
  getCartItemAPI,
  removeItemFromCartAPI,
  updateCartItemAPI,
} from "../store/cart/cart.actions";

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

const AllProductsLayout = ({ product }) => {
  // console.log("porductsData", product);
  const [countValue, setCountValue] = useState(0);
  const [isSkeleten, setIsSkeleten] = useState(true);
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
    // let ans = cartData.find(someobject => someobject.productId == id).count = 10;
    // console.log(update[0]);
    // console.log("id:", ans)

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

  // below function is used to remove cart item,
  // In this all products page remove button is not available
  // it will be used in cart page and single product page
  const handleRemoveFromCart = (value) => {
    let remove = cartData.filter((data) => data._productId == value);
    // console.log("ans is:", remove,remove[0]?.id);
    if (remove.length !== 0) {
      // console.log(remove.id);
      dispatch(removeItemFromCartAPI(remove[0]._id));
    }
  };

  //Below useEffect is used to fetch count of cart item
  useEffect(() => {
    const getCount = () => {
      let ans = cartData.filter((data) => data._productId == product._id);
      return ans[0] ? ans[0]?.count : 0;
    };
    setCountValue(Number(getCount()));
  }, [product, cartData]);

  //Below useEffect is used to fetch all cart items
  useEffect(() => {
    // dispatch(getCartItemAPI());
    setIsSkeleten(false);
  }, []);

  return (
    <Skeleton
      startColor="blackAlpha.200"
      endColor="blackAlpha.300"
      isLoaded={!(getCartItems.loading && isSkeleten)}
    >
      <Box
        border={"1px solid #eee"}
        transition={".3s"}
        rounded={4}
        height="300px"
        opacity={product?.soldOut ? "0.6" : "1"}
        _hover={{
          transition: ".6s",
          boxShadow: "0 0 9px 0 rgb(0 0 0 / 30%)",
        }}
      >
        <Box p={"10px 20px 0"} bg={"#f9f9f9"} rounded={4} position={"relative"}>
          <Link
            to={`/products/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <Image
              src={product?.imgUrl}
              h="185px"
              bg={"#f9f9f9"}
              display="block"
              m={"auto"}
            />
          </Link>
          {product?.soldOut && (
            <Box
              opacity={"0.5"}
              fontSize={"14px"}
              color={"#f4b21e"}
              bg={"#fff4db"}
              w="100%"
              position={"absolute"}
              bottom="0"
              left="0"
              right="0"
            >
              {product?.soldOut}
            </Box>
          )}
        </Box>
        <Box p={"12px"} textAlign="left">
          <Box
            h={"38px !important"}
            fontSize="14px"
            lineHeight={"19px"}
            fontWeight="400"
            overflow={"hidden"}
            textOverflow="ellipsis"
            opacity={"0.9"}
          >
            <Text color={"gray"}>{product?.name}</Text>
          </Box>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Stack textAlign={"left"}>
              <Flex gap={2} alignItems="center">
                <Text fontSize="13px" opacity={"0.5"}>
                  {product?.packSize}
                </Text>
                {product?.tooltipText && (
                  <Tooltip
                    hasArrow
                    label={product?.tooltipText}
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
              <Flex gap={2} fontSize="16px" m="0 !important">
                <Text>₹{product?.price}</Text>
                <Text as="s" color={"#828282"}>
                  {product?.strikePrice ? `₹${product?.strikePrice}` : ""}
                </Text>
              </Flex>
            </Stack>
            {product?.soldOut ? (
              ""
            ) : (
              <Stack>
                {countValue == 0 ? (
                  <AddToCartBtn
                    key={product.id}
                    onClick={() => handleAddToCart(product)}
                  >
                    {addCartItem.loading && addCartItem._id === product._id ? (
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
                        handleUpdate(product?._id, Number(countValue) - 1)
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
                      {updateCartItem.loading &&
                      updateCartItem._id == product._id ? (
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
                        handleUpdate(product?._id, Number(countValue) + 1);
                      }}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </CartInc>
                  </Flex>
                )}
              </Stack>
            )}
          </Flex>
        </Box>
      </Box>
    </Skeleton>
  );
};

export default AllProductsLayout;
