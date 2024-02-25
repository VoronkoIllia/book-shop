import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import booksListReducer from "./reducers/books-list-reducer";
import authReducer from "./reducers/auth-reducer";
import  {thunk }from "redux-thunk";
import cartReducer from "./reducers/cart-reducer";


const reducer = combineReducers({
    booksPage: booksListReducer,
    auth: authReducer,
    cartPage: cartReducer,
})


const composedEnhancer = compose(applyMiddleware(thunk))
const store = legacy_createStore(
    reducer,
    undefined,
    composedEnhancer
);

export type AppState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;