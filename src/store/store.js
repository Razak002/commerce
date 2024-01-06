import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";


//the store brings the actions and reducers together and hold the application state
const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice
    }
})

export default store;