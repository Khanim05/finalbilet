import { configureStore } from "@reduxjs/toolkit";
import {persistStore,persistReducer} from 'redux-persist'
import ProductSlice from '../features/productSlice'
import BasketSice from '../features/basketSlice'
import storage from 'redux-persist/lib/storage'

const persissRoot={
    key:"root",
    storage
}

const productReducer=persistReducer(persissRoot,ProductSlice)
const basketReducer=persistReducer(persissRoot,BasketSice)

export const store=configureStore({
    reducer:{
        product:productReducer,
        basket:basketReducer,
    }
})

const persistor=persistStore(store)
export default persistor