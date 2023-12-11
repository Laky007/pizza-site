import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  cart: [],

  /*
  cart: [
    {
      pizzaId: 1,
      name: "Napoli",
      quantity: 2,
      quantity: 1,
      unitPrice: 16,
      totalPrice: 32,
    }
  */
};

const cartSlice = createSlice({
  name: "cart",
  initialState: InitialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      const foundPizza = state.cart.findIndex(
        (element) => element.pizzaId === action.payload.pizzaId,
      );
      if (foundPizza >= 0) {
        state.cart[foundPizza].quantity++;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrize = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

//"reselect" more on this if you want to optimize in Redux
