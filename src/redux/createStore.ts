import { configureStore } from "deox";
import { combineReducers } from "redux";

export default function createStore() {
    return configureStore({
        reducer: combineReducers({
        })
    });
}
