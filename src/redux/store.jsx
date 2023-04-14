import { legacy_createStore ,applyMiddleware} from "redux";
import basicReducer from "./reducer";
import logger from "redux-logger";

const mystore=legacy_createStore(basicReducer,applyMiddleware(logger));

export default mystore;