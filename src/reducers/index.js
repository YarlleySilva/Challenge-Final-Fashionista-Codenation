import { combineReducers } from "redux"; //Une reducers global.

import { productsReducers } from "./products";
import { cartProductsReducers } from "./cartProducts";
import { modalsReducers } from "./modals"


const reducers = combineReducers({
  productsReducers,
  cartProductsReducers,
  modalsReducers
});

export { reducers };