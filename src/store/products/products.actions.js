import * as types from "./products.types";
import axios from "axios";

// Get fresh fruits Api call ##########################################
const getFreshFruitsLoading = (payload) => {
  return {
    type: types.GET_FRESH_FRUITS_LOADING,
    payload,
  };
};
const getFreshFruitsSuccess = (payload) => {
  return {
    type: types.GET_FRESH_FRUITS_SUCCESS,
    payload,
  };
};
const getFreshFruitsError = (payload) => {
  return {
    type: types.GET_FRESH_FRUITS_ERROR,
    payload,
  };
};

const getFreshFruitsAPI = (payload) => (dispatch) => {
  dispatch(getFreshFruitsLoading(payload));
  axios
    .get(`/products?subCatagory=freshFruits`)
    .then((r) => dispatch(getFreshFruitsSuccess(r.data)))
    .catch((e) => dispatch(getFreshFruitsError(e.data)));
};

// Get exotic fruits Api call ##########################################
const getExoticFruitsLoading = (payload) => {
  return {
    type: types.GET_EXOTIC_FRUITS_LOADING,
    payload,
  };
};
const getExoticFruitsSuccess = (payload) => {
  return {
    type: types.GET_EXOTIC_FRUITS_SUCCESS,
    payload,
  };
};
const getExoticFruitsError = (payload) => {
  return {
    type: types.GET_EXOTIC_FRUITS_ERROR,
    payload,
  };
};

const getExoticFruitsAPI = (payload) => (dispatch) => {
  dispatch(getExoticFruitsLoading(payload));
  axios
    .get(`/products?subCatagory=exoticFruits`)
    .then((r) => dispatch(getExoticFruitsSuccess(r.data)))
    .catch((e) => dispatch(getExoticFruitsError(e.data)));
};

// Get combo fruits Api call ##########################################
const getCombosFruitsLoading = (payload) => {
  return {
    type: types.GET_COMBOS_FRUITS_LOADING,
    payload,
  };
};
const getCombosFruitsSuccess = (payload) => {
  return {
    type: types.GET_COMBOS_FRUITS_SUCCESS,
    payload,
  };
};
const getCombosFruitsError = (payload) => {
  return {
    type: types.GET_COMBOS_FRUITS_ERROR,
    payload,
  };
};

const getCombosFruitsAPI = (payload) => (dispatch) => {
  dispatch(getCombosFruitsLoading(payload));
  axios
    .get(`/products?subCatagory=fruitCombos`)
    .then((r) => dispatch(getCombosFruitsSuccess(r.data)))
    .catch((e) => dispatch(getCombosFruitsError(e.data)));
};
// Get combo fruits Api call ##########################################
const getBestDealsLoading = (payload) => {
  return {
    type: types.GET_BEST_DEALS_LOADING,
    payload,
  };
};
const getBestDealsSuccess = (payload) => {
  return {
    type: types.GET_BEST_DEALS_SUCCESS,
    payload,
  };
};
const getBestDealsError = (payload) => {
  return {
    type: types.GET_BEST_DEALS_ERROR,
    payload,
  };
};

const getBestDealsAPI = (payload) => (dispatch) => {
  dispatch(getBestDealsLoading(payload));
  axios
    .get(`/products?subCatagory=bestDeals`)
    .then((r) => dispatch(getBestDealsSuccess(r.data)))
    .catch((e) => dispatch(getBestDealsError(e.data)));
};

const getSingleProductLoading = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_LOADING,
    payload: payload,
  };
}
const getSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload: payload,
  };
}
const getSingleProductError = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_ERROR,
    payload: payload,
  };
}

const getSingleProductAPI = (id, dispatch) => {
  dispatch(getSingleProductLoading());
  axios
    .get(`/products/${id}`)
    .then((r) => {
      console.log(r.data, "from reducer function")
      dispatch(getSingleProductSuccess(r.data));
    })
    .catch((e) => dispatch(getSingleProductError(e.data)));
}

export {
  getFreshFruitsAPI,
  getExoticFruitsAPI,
  getCombosFruitsAPI,
  getBestDealsAPI,
  getSingleProductAPI
};
