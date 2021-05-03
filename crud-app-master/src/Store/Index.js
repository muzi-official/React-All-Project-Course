import { combineReducers, createStore } from "redux";
import { authReducers } from "./Reducers/authReducers";

const reducers = combineReducers({
  auth: authReducers,
});

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
