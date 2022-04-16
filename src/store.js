import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";

console.log(api)

export const store = configureStore({
    reducer: {
    [api.reducerPath]: api.reducer,
    },
    middleware: (gDM)=>gDM().concat(api.middleware)
})