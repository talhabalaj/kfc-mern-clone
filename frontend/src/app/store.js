import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './modules/cart/store/cartSlice'
import { persistStore } from 'redux-persist'

import { apiSlice } from './modules/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export const persistor = persistStore(store)
