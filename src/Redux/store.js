import { configureStore } from "@reduxjs/toolkit";
import { searchInputSlice } from "./toggleSlice";
import { inputModalSlice } from "./inputModalSlice";
const store = configureStore({
    reducer: {
        searchInputReducer: searchInputSlice.reducer,
        inputModalSlice: inputModalSlice.reducer
    }
})

export default store