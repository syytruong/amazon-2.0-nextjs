import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const index = state.items.findIndex(
        basketItem => basketItem.id === action.payload.id
      )

      if (index >= 0) {
        let quantity = state.items[index].quantity
        quantity += 1
        state.items[index].quantity = quantity
      } else {
        const product = action.payload
        product.quantity = 1
        state.items = [...state.items, product]
      }

      console.log(state.items)
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        basketItem => basketItem.id === action.payload.id
      )
      let newBasket = [...state.items]
      if (index >= 0) {
        if (newBasket[index].quantity > 1) {
          let quantity = newBasket[index].quantity
          quantity -= 1
          newBasket[index].quantity = quantity
        } else {
          newBasket.splice(index, 1)
        }
      } else {
        console.warn(
          "Your basket has been updated, the product is not in the basket. Please refresh the page"
        )
      }
      state.items = newBasket
    },
    deleteFromBasket: (state, action) => {
      const index = state.items.findIndex(
        basketItem => basketItem.id === action.payload.id
      )

      let newBasket = [...state.items]
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          "Your basket has been updated, the product is not in the basket. Please refresh the page"
        )
      }
      state.items = newBasket
    },
  },
})

export const { addToBasket, removeFromBasket, deleteFromBasket } =
  basketSlice.actions

// Selectors - This is how we pull information from the Global store slice
export const selectItems = state => state.basket.items
export const selectTotalItems = state =>
  state.basket.items.reduce((total, item) => total + item.quantity, 0)
export const selectTotal = state =>
  state.basket.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

export default basketSlice.reducer
