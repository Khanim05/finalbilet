import {configureStore} from '@reduxjs/toolkit'

import {persistStore,persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import productSlice from '../featured/ProSlice'

import basketSlice from '../featured/basketSlice'

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedProduct=persistReducer(persistConfig,productSlice)
const persistedBasket=persistReducer(persistConfig,basketSlice)


export const store=configureStore({
    reducer:{
        product:persistedProduct,
        basket:persistedBasket
    }
})

const persistor=persistStore(store)
export default persistor

