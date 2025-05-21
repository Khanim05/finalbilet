import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import basketSlice from '../features/basket'
import productSlice from '../features/product'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, basketSlice)
const persistedProduct = persistReducer(persistConfig, productSlice)

export const store = configureStore({
  reducer: {
    product:persistedProduct,
    basket:persistedReducer
  },
})

const persistor=persistStore(store)
export default persistor