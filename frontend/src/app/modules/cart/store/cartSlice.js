import { createSlice } from '@reduxjs/toolkit'

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
        item.quantity++
      } else {
        state.items.push({
          id: action.payload.id,
          quantity: action.payload.quantity ?? 1,
          addons: action.payload.addons ?? [],
        })
      }
    },
    removeItem: (state, action) => {
      if (!action.payload) return

      const idx = state.items.findIndex(({ id }) => id === action.payload.id)

      if (idx !== -1) state.items = state.items.splice(idx, 1)
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

export const { addItem, removeItem, clearItems, openCart, closeCart } =
  cartSlice.actions

export const cartReducer = cartSlice.reducer
