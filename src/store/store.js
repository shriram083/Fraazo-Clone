import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";
import { porductsReducer } from "./products/products.reducer";

const rootReducer = combineReducers({
  products: porductsReducer,
  cart: cartReducer,
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
