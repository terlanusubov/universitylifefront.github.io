import { configureStore } from "@reduxjs/toolkit";
import { searchInputSlice } from "./toggleSlice";
const store = configureStore({
    reducer: {
            searchInputReducer:searchInputSlice.reducer
    }
})

export default store