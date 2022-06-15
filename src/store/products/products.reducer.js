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
  bestDeals: {
    loading: false,
    error: false,
    data: [],
  },
  singleProduct: {
    id: '',
    imgUrl: '',
    name: '',
    packSize: '',
    price: '',
    strikePrice: '',
    soldOut: '',
    notifyme: '',
    category: '',
    subCatagory: '',
    tooltipText: '',
    benefits: '',
    description: '',
    info: ''
  }
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
    // Get bestDeals Api call ##########################################
    case types.GET_BEST_DEALS_LOADING:
      return {
        ...state,
        bestDeals: {
          loading: true,
          error: false,
        },
      };
    case types.GET_BEST_DEALS_SUCCESS:
      return {
        ...state,
        bestDeals: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_BEST_DEALS_ERROR:
      return {
        ...state,
        bestDeals: {
          loading: false,
          error: true,
        },
      };
    // single product details case starts
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: payload
      };
    // single product details case ends

    default:
      return state;
  }
};
