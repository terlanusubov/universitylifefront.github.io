import { configureStore } from "@reduxjs/toolkit";
import { searchInputSlice } from "./toggleSlice";
import { sideBarSlice } from "./toggleSlice";
import { bannerSlice } from "./toggleSlice";
const store = configureStore({
    reducer: {
            searchInputReducer:searchInputSlice.reducer,
            sideBarReducer:sideBarSlice.reducer,
            bannerReducer:bannerSlice.reducer
    }
})

export default store