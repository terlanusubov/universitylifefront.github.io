import { configureStore } from "@reduxjs/toolkit";
import { searchInputSlice } from "./toggleSlice";
import { detailSliderSlice } from "./slider";
const store = configureStore({
    reducer: {
            searchInputReducer:searchInputSlice.reducer,
            detailSliceReducer:detailSliderSlice.reducer
    }
})

export default store