import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productSlice from '../features/productSlice'
import basketSlice from '../features/basketSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const productReducer=persistReducer(persistConfig,productSlice)
const basketReducer=persistReducer(persistConfig,basketSlice)

export const store=configureStore({
    reducer:{
        product:productReducer,
        basket:basketReducer
    }
})

const persistor=persistStore(store)
export default persistor