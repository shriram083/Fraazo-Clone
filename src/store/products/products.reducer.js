import * as types from "./products.types";

const initialState = {
  mangoes: {
    loading: false,
    error: false,
    data: [],
  },
  //fruits
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
  // vegetables
  dailyVegetables: {
    loading: false,
    error: false,
    data: [],
  },
  exoticVegetables: {
    loading: false,
    error: false,
    data: [],
  },
  cutsPeeled: {
    loading: false,
    error: false,
    data: [],
  },
  combosVegetables: {
    loading: false,
    error: false,
    data: [],
  },
  herbsLeafs: {
    loading: false,
    error: false,
    data: [],
  },

  // fry fruits
  dryFruits: {
    loading: false,
    error: false,
    data: [],
  },

  bestDeals: {
    loading: false,
    error: false,
    data: [],
  },
};

export const porductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Get mangoes Api call ##########################################
    case types.GET_MANGOES_LOADING:
      return {
        ...state,
        mangoes: {
          loading: true,
          error: false,
        },
      };
    case types.GET_MANGOES_SUCCESS:
      return {
        ...state,
        mangoes: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_MANGOES_ERROR:
      return {
        ...state,
        mangoes: {
          loading: false,
          error: true,
        },
      };
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
    // Get daily Vegetable Api call ##########################################
    case types.GET_DAILY_VAGETABLES_LOADING:
      return {
        ...state,
        dailyVegetables: {
          loading: true,
          error: false,
        },
      };
    case types.GET_DAILY_VAGETABLES_SUCCESS:
      return {
        ...state,
        dailyVegetables: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_DAILY_VAGETABLES_ERROR:
      return {
        ...state,
        dailyVegetables: {
          loading: false,
          error: true,
        },
      };
    // Get exotic Vegetables Api call ##########################################
    case types.GET_EXOTIC_VAGETABLES_LOADING:
      return {
        ...state,
        exoticVegetables: {
          loading: true,
          error: false,
        },
      };
    case types.GET_EXOTIC_VAGETABLES_SUCCESS:
      return {
        ...state,
        exoticVegetables: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_EXOTIC_VAGETABLES_ERROR:
      return {
        ...state,
        exoticVegetables: {
          loading: false,
          error: true,
        },
      };

    // Get cuts Peeled Api call ##########################################
    case types.GET_CUTS_PEELED_LOADING:
      return {
        ...state,
        cutsPeeled: {
          loading: true,
          error: false,
        },
      };
    case types.GET_CUTS_PEELED_SUCCESS:
      return {
        ...state,
        cutsPeeled: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_CUTS_PEELED_ERROR:
      return {
        ...state,
        cutsPeeled: {
          loading: false,
          error: true,
        },
      };

    // Get combos Vegetables Api call ##########################################
    case types.GET_COMBOS_VAGETABLES_LOADING:
      return {
        ...state,
        combosVegetables: {
          loading: true,
          error: false,
        },
      };
    case types.GET_COMBOS_VAGETABLES_SUCCESS:
      return {
        ...state,
        combosVegetables: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_COMBOS_VAGETABLES_ERROR:
      return {
        ...state,
        combosVegetables: {
          loading: false,
          error: true,
        },
      };

    // Get herbs Leafs Api call ##########################################
    case types.GET_HERBS_LEAFS_LOADING:
      return {
        ...state,
        herbsLeafs: {
          loading: true,
          error: false,
        },
      };
    case types.GET_HERBS_LEAFS_SUCCESS:
      return {
        ...state,
        herbsLeafs: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_HERBS_LEAFS_ERROR:
      return {
        ...state,
        herbsLeafs: {
          loading: false,
          error: true,
        },
      };

    // Get dry fruits Api call ##########################################
    case types.GET_DRY_FRUITS_LOADING:
      return {
        ...state,
        dryFruits: {
          loading: true,
          error: false,
        },
      };
    case types.GET_DRY_FRUITS_SUCCESS:
      return {
        ...state,
        dryFruits: {
          loading: false,
          error: false,
          data: payload,
        },
      };
    case types.GET_DRY_FRUITS_ERROR:
      return {
        ...state,
        dryFruits: {
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

    default:
      return state;
  }
};
