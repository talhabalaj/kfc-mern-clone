import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './modules/cart/store/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
