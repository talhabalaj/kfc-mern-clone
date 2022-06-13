import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const cartSlice = createSlice({
  initialState: {
    items: [],
    open: false,
  },
  name: 'cart',
  reducers: {
    addItem: (state, action) => {
      if (!action.payload) return

      const item = state.items.find(({ id }) => id === action.payload.id)

      if (item) {
        item.quantity += action.payload.quantity ?? 1
      } else {
        state.items.push({
          id: action.payload.id,
          quantity: action.payload.quantity ?? 1,
          addons: action.payload.addons ?? [],
        })
      }

      state.open = true
    },
    removeItem: (state, action) => {
      if (!action.payload) return

      const idx = state.items.findIndex(({ id }) => id === action.payload.id)

      if (idx !== -1) {
        state.items.splice(idx, 1)
      }
    },
    changeQuantity: (state, action) => {
      if (!action.payload) return

      const { fn } = action.payload
      const idx = state.items.findIndex(({ id }) => id === action.payload.id)

      if (idx !== -1) {
        state.items[idx].quantity = fn(state.items[idx].quantity)
      }
    },
    clearItems: (state) => {
      state.items = []
    },
    closeCart: (state) => {
      state.open = false
    },
    openCart: (state) => {
      state.open = true
    },
  },
})

export const {
  addItem,
  removeItem,
  clearItems,
  openCart,
  closeCart,
  changeQuantity,
} = cartSlice.actions

export const cartReducer = persistReducer(
  {
    key: 'cart',
    storage,
  },
  cartSlice.reducer
)
