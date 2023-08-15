import { configureStore } from "@reduxjs/toolkit";
import { searchInputSlice } from "./toggleSlice";
import  productSlice from "./accomodation/productSlice"
const store = configureStore({
    reducer: {
            searchInputReducer:searchInputSlice.reducer,
            productReducer:productSlice.reducer,
    }
})

export default store