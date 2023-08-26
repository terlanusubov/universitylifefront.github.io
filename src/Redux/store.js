import { configureStore } from "@reduxjs/toolkit";
import { ProfileTogglesSlice } from "./ProfileSlice";
import { searchInputSlice } from "./toggleSlice";
import { sideBarSlice } from "./toggleSlice";
import { bannerSlice } from "./toggleSlice";
import { authenticationSlice } from "./AuthenticationSlice";
const store = configureStore({
    reducer: {
            searchInputReducer:searchInputSlice.reducer,
            ProfileReducer:ProfileTogglesSlice.reducer,
            sideBarReducer:sideBarSlice.reducer,
            bannerReducer:bannerSlice.reducer,
            authenticationReducer:authenticationSlice.reducer
    }
})

export default store