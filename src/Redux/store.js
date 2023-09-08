import { configureStore } from "@reduxjs/toolkit";
import { ProfileTogglesSlice } from "./ProfileSlice";
import { searchInputSlice } from "./toggleSlice";
import { sideBarSlice } from "./toggleSlice";
import { bannerSlice } from "./toggleSlice";
import { authenticationSlice } from "./AuthenticationSlice";
import { ModalSlice } from "./ModalSlice";
import { propertiesSlice } from "./PropertiesSlice";
const store = configureStore({
    reducer: {
            searchInputReducer:searchInputSlice.reducer,
            ProfileReducer:ProfileTogglesSlice.reducer,
            sideBarReducer:sideBarSlice.reducer,
            bannerReducer:bannerSlice.reducer,
            authenticationReducer:authenticationSlice.reducer,
            modalReducer:ModalSlice.reducer,
            propertiesReducer:propertiesSlice.reducer
    }
})

export default store