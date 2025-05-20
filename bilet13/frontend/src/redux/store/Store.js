import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productSlice from '../features/product'
import basketSlice from '../features/basket'


const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, productSlice)
const persistBasket=persistReducer(persistConfig,basketSlice)

export const store = configureStore({
  reducer: {
product:persistedReducer,
basket:persistBasket,
  },
})

const persistor=persistStore(store)
export default persistor