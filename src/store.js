import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit'
import ClientReducer from "./features/ClientsSlices";
import UsernameReducer from "./features/UsernameSlice";
import CodeReducer from "./features/CodeSlice";

const rootReducer = combineReducers({
    Clients: ClientReducer,
    Username: UsernameReducer,
    Code: CodeReducer,  
})

export const store = configureStore({
    reducer: rootReducer,
});