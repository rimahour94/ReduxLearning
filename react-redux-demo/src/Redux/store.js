import { createStore } from "redux";
import cakeReducer from "./Cake/cakeReducer";

const store = createStore(cakeReducer)

export default store