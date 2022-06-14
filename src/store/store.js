import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { porductsReducer } from "./products/products.reducer";

const rootReducer = combineReducers({
  products: porductsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
