// Cart Actions here
import * as types from "./cart.types";
import axios from "axios";

// get item to cart
const getCartItemLoading = (payload) => {
  return {
    type: types.GET_CART_ITEMS_LOADING,
    payload,
  };
};
const getCartItemSuccess = (payload) => {
  return {
    type: types.GET_CART_ITEMS_SUCCESS,
    payload,
  };
};
const getCartItemError = (payload) => {
  return {
    type: types.GET_CART_ITEMS_ERROR,
    payload,
  };
};

const getCartItemAPI = (payload) => (dispatch) => {
  dispatch(getCartItemLoading(payload));
  axios
    .get(`/cartItems`)
    .then((r) => dispatch(getCartItemSuccess(r.data)))
    .catch((e) => dispatch(getCartItemError(e.data)));
};

// add item to cart
const addItemToCartLoading = (payload) => {
  return {
    type: types.ADD_ITEM_TO_CART_LOADING,
    payload,
  };
};
const addItemToCartSuccess = (payload) => {
  return {
    type: types.ADD_ITEM_TO_CART_SUCCESS,
    payload,
  };
};
const addItemToCartError = (payload) => {
  return {
    type: types.ADD_ITEM_TO_CART_ERROR,
    payload,
  };
};

const addItemToCartAPI = (payload) => (dispatch) => {
  dispatch(addItemToCartLoading(payload));
  axios
    .post(`/cartItems`, payload)
    .then((r) => dispatch(addItemToCartSuccess(r.data)))
    .catch((e) => dispatch(addItemToCartError(e.data)));
};

// update cart item
const updateCartItemLoading = (payload) => {
  return {
    type: types.UPDATE_CART_ITEMS_LOADING,
    payload,
  };
};
const updateCartItemSuccess = (payload) => {
  return {
    type: types.UPDATE_CART_ITEMS_SUCCESS,
    payload,
  };
};
const updateCartItemError = (payload) => {
  return {
    type: types.UPDATE_CART_ITEMS_ERROR,
    payload,
  };
};

const updateCartItemAPI = (payload) => (dispatch) => {
  dispatch(updateCartItemLoading(payload));
  axios
    .patch(`/cartItems/${payload.cartId}`, { count: payload.newCount })
    .then((r) => dispatch(updateCartItemSuccess(r.data)))
    .then(() => dispatch(getCartItemAPI()))
    .catch((e) => dispatch(updateCartItemError(e.data)));
};

// delete cart item
const removeItemFromCartLoading = (payload) => {
  return {
    type: types.REMOVE_CART_ITEMS_LOADING,
    payload,
  };
};
const removeItemFromCartSuccess = (payload) => {
  return {
    type: types.REMOVE_CART_ITEMS_SUCCESS,
    payload,
  };
};
const removeItemFromCartError = (payload) => {
  return {
    type: types.REMOVE_CART_ITEMS_ERROR,
    payload,
  };
};

const removeItemFromCartAPI = (payload) => (dispatch) => {
  dispatch(removeItemFromCartLoading(payload));
  axios
    .delete(`/cartItems/${payload}`)
    .then((r) => dispatch(removeItemFromCartSuccess(r.data)))
    .then(() => dispatch(getCartItemAPI()))
    .catch((e) => dispatch(removeItemFromCartError(e.data)));
};

export {
  getCartItemAPI,
  addItemToCartAPI,
  updateCartItemAPI,
  removeItemFromCartAPI,
};
