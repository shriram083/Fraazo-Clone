import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import {
  addItemToCartAPI,
  removeItemFromCartAPI,
  updateCartItemAPI,
} from "../store/cart/cart.actions";
import { Link } from "react-router-dom";
import { useRef } from "react";

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

const SearchBar = styled.div`
  position: relative;
  border: 1px solid;
  height: 50px;
  display: flex;
  align-items: center;
  min-width: 575px;
  margin-left: 20px;

  border-radius: 24px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  outline: 0;
  font-size: 13px;
  line-height: 18px;
  padding: 14px;
  color: #333333;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  width: 50%;
  & input {
    display: block;
    background-color: #f9f9f9;
    border: none;
    width: 100%;
  }
  & input:focus {
    outline: none;
  }
  & svg {
    position: absolute;
    right: 22px;
    cursor: pointer;
  }
`;
const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#4fbb90"
    strokeWidth={3}
    height={"16px"}
    width={"16px"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
const SearchBox = () => {
  const [query, setQuery] = useState("");

  const [searchData, setSearchData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [countValue, setCountValue] = useState(0);
  const [isSkeleten, setIsSkeleten] = useState(true);
  const dispatch = useDispatch();
  const {
    data: cartData,
    getCartItems,
    addCartItem,
    updateCartItem,
  } = useSelector((state) => state.cart);

  const handleOnChangeOpen = (e) => {
    const { name, value } = e.target;
    setQuery(value);
    console.log("query", value);

    if (value.length >= 3) {
      onOpen();
      //   fetchResult(value);
    }
  };
  const id = useRef(null);
  const debounce = (e, fetchResult, delay) => {
    console.log("value", e.target.value);

    const { name, value } = e.target;
    setQuery(value);
    console.log("query", value);

    if (value.length < 3) {
      onClose();
      // setQuery("");
    } else if (value.length >= 3) {
      if (id.current) {
        clearTimeout(id.current);
      }
      id.current = setTimeout(function () {
        fetchResult(value);
      }, delay);
    }
  };
  const fetchResult = (query) => {
    axios
      .get(`/products?q=${query}`)
      .then((r) => {
        console.log("fetch Result", r.data);
        setSearchData(r.data);
      })
      .catch((e) => console.log("error", e.data));
  };
  //   console.log(searchData);

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
    // let ans = cartData.find(someobject => someobject.productId == id).count = 10;
    // console.log(update[0]);
    // console.log("id:", ans)

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
  // useEffect(() => {
  const getCount = (item) => {
    let ans = cartData.filter((data) => data.productId == item.id);
    return ans[0] ? ans[0]?.count : 0;
  };
  // setCountValue(Number(getCount()));
  // }, [item, cartData]);

  return (
    <div>
      <SearchBar>
        <Input
          flex={1}
          pl={"5px"}
          type="search"
          variant="unstyled"
          value={query}
          placeholder="Find fresh vegetables, fruits and dairy..."
          //   onClick={() => onOpen()}
          onChange={handleOnChangeOpen}
        />
        {query?.length == 0 && SearchIcon}
      </SearchBar>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        {query.length >= 2 && <ModalOverlay opacity={"0.5"} />}
        <ModalContent mt={5} rounded={"24px 24px 5px 5px"} bg={"#f9f9f9"}>
          <Input
            type={"search"}
            variant="flushed"
            h={"50px"}
            p={"0 20px"}
            value={query}
            onChange={(e) => debounce(e, fetchResult, 600)}
          />

          <ModalBody
            p={"0"}
            maxH={"400px"}
            overflowX={"hidden"}
            overflowY={"auto"}
          >
            {searchData?.length == 0 ? (
              <Box fontSize={"14px"} textAlign={"center"} p={"10px 0"}>
                No Results Found
              </Box>
            ) : (
              <Box>
                {searchData?.map((item) => (
                  <Box
                    key={item.id}
                    borderTop={"1px solid #f1f1f1"}
                    p={"10px 30px 10px 20px"}
                  >
                    <Flex
                      // justifyContent={"space-between"}
                      alignItems={"center"}
                      gap={3}
                    >
                      <Link
                        to={`/products/${item.id}`}
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
                              {item?.strikePrice
                                ? `₹ ${item?.strikePrice}`
                                : ""}
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
                                {getCount(item) == 0 ? (
                                  <AddToCartBtn
                                    key={item.id}
                                    onClick={() => handleAddToCart(item)}
                                  >
                                    {addCartItem.loading &&
                                    addCartItem.id === item.id ? (
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
                                        handleUpdate(
                                          item?.id,
                                          Number(getCount(item)) - 1
                                        )
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
                                      updateCartItem?.id === item?.id ? (
                                        <Spinner speed="0.65s" size="xs" />
                                      ) : (
                                        <CardCount>{getCount(item)}</CardCount>
                                      )}
                                    </Tooltip>

                                    <CartInc
                                      disabled={getCount(item) >= 5}
                                      onClick={() => {
                                        handleUpdate(
                                          item?.id,
                                          Number(getCount(item)) + 1
                                        );
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
                ))}
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SearchBox;
