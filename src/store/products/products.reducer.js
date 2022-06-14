import * as types from "./products.types";

const initialState = {
  freshFruits: {
    loading: false,
    error: false,
    data: [],
  },
  exoticFruits: {
    loading: false,
    error: false,
    data: [],
  },
  combosFruits: {
    loading: false,
    error: false,
    data: [],
  },
};

export const porductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get fresh fruits Api call ##########################################
    case types.GET_FRESH_FRUITS_LOADING:
      return {
        ...state,
        freshFruits: {
          loading: true,
          error: false,
        },
      };
    case types.GET_FRESH_FRUITS_SUCCESS:
      return {
        ...state,
        freshFruits: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_FRESH_FRUITS_ERROR:
      return {
        ...state,
        freshFruits: {
          loading: false,
          error: true,
        },
      };
    // Get exotic fruits Api call ##########################################
    case types.GET_EXOTIC_FRUITS_LOADING:
      return {
        ...state,
        exoticFruits: {
          loading: true,
          error: false,
        },
      };
    case types.GET_EXOTIC_FRUITS_SUCCESS:
      return {
        ...state,
        exoticFruits: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_EXOTIC_FRUITS_ERROR:
      return {
        ...state,
        exoticFruits: {
          loading: false,
          error: true,
        },
      };
    // Get combos fruits Api call ##########################################
    case types.GET_COMBOS_FRUITS_LOADING:
      return {
        ...state,
        combosFruits: {
          loading: true,
          error: false,
        },
      };
    case types.GET_COMBOS_FRUITS_SUCCESS:
      return {
        ...state,
        combosFruits: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_COMBOS_FRUITS_ERROR:
      return {
        ...state,
        combosFruits: {
          loading: false,
          error: true,
        },
      };

    default:
      return state;
  }
};
