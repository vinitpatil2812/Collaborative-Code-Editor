import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import ClientReducer from "./features/ClientsSlices";
import UsernameReducer from "./features/UsenameSlice";
import CodeReducer from "./features/CodeSlice";

const rootReducer = combineReducers({
    clients: ClientReducer,
    username: UsernameReducer,
    code: CodeReducer,
})

export const store = configureStore({
    reducer: rootReducer,
});