import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  filterProducts: {
    searchProduct: "",
  },
  cartInfo: {
    toppings: [],
    qty: "",
    noteToTheKitchen: "",
  },
  cart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.products = payload;
    },
    getSearchedProduct: (state, { payload }) => {
      state.filterProducts.searchProduct = payload;
    },
    getToppings: (state, { payload }) => {
      state.cartInfo.toppings = [...payload];
    },
    getQty: (state, { payload }) => {
      state.cartInfo.qty = payload;
    },
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
  },
});

export const {
  addProducts,
  getSearchedProduct,
  getToppings,
  getQty,
  addToCart,
} = productSlice.actions;
export const getAllProducts = (state) => state.products;
export default productSlice.reducer;
