import { configureStore } from "@reduxjs/toolkit";
import { searchInputSlice } from "./toggleSlice";
import { detailPageSlice } from "./detailPageSlice";
const store = configureStore({
    reducer: {
            searchInputReducer:searchInputSlice.reducer,
            detailPageReducer:detailPageSlice.reducer
    }
})

export default store