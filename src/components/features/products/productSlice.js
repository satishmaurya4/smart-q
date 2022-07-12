import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  filterProducts: {
    searchProduct: "",
  },
  itemDetail: [],
  cartInfo: {
    id: "",
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
    storeProducts: (state, action) => {
      state.products = action.payload;
    },
    getSearchedProduct: (state, { payload }) => {
      state.filterProducts.searchProduct = payload;
    },
    getItemInfo: (state, { payload: { id, qty, kitchenNote } }) => {
      const existingItem = state.itemDetail.find((item) => item.itemId == id);
      if (!existingItem) {
        state.itemDetail.push({
          itemId: id,
          qty: qty,
          kitchenNote: kitchenNote,
        });
      } else {
        existingItem.qty = qty;
        existingItem.kitchenNote = kitchenNote;
      }
    },
    // getToppings: (state, { payload }) => {
    //   if (state.cartInfo.id === '') {
    //     state.cartInfo.id = payload.id;
    //     state.cartInfo.toppings = payload.checked;
    //   } else if (state.cartInfo.id !== payload.id) {
    //     state.cartInfo.id = payload.id;
    //     state.cartInfo.toppings = payload.checked;

    //   } else {
    //     state.cartInfo.toppings = payload.checked;
    //   }
    //   console.log("toppings payload", state.cartInfo.toppings)
    //   console.log("toppings id", state.cartInfo.id)
    // },
    // getQty: (state, { payload }) => {
    //   if (state.cartInfo.id === '') {
    //     state.cartInfo.id = payload.id;
    //     state.cartInfo.qty = payload.qty;
    //   } else if (state.cartInfo.id !== payload.id) {
    //     state.cartInfo.id = payload.id;
    //     state.cartInfo.qty = payload.qty;
    //   } else {
    //     state.cartInfo.qty = payload.qty;
    //   }
    // //   state.cartInfo.qty = payload;
    //     console.log('payload of qty', payload)
    // },
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
  },
});

export const {
  storeProducts,
  getSearchedProduct,
  getToppings,
  getQty,
  addToCart,
  getItemInfo,
} = productSlice.actions;
export const getState = (state) => state.products;
export default productSlice.reducer;
