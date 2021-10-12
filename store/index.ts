import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {getProductsReducer} from "./reducers/getProductsReducer/getProductsReducer";

const rootReducer = combineReducers({
    products: getProductsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
