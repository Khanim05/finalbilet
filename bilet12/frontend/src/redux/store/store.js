import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import basketSlice from '../featutes/basket'
import productSlice from '../featutes/product'

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, productSlice)
const persistedBasket=persistReducer(persistConfig,basketSlice)

export const store = configureStore({
  reducer: {
    product:persistedReducer,
    basket:persistedBasket
  },
})

const persistor=persistStore(store)

export default persistor