import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../features/product'
import basketSlice from '../features/basket'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedProduct = persistReducer(persistConfig, productSlice)
const persistedBasket = persistReducer(persistConfig, basketSlice)

export const store = configureStore({
  reducer: {
    product:persistedProduct,
    basket:persistedBasket
  },
})


const persistor=persistStore(store)
export default persistor