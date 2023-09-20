import { configureStore } from "@reduxjs/toolkit";
import { ProfileTogglesSlice } from "./ProfileSlice";
import { searchInputSlice } from "./toggleSlice";
import { detailSliderSlice } from "./slider";
import { sideBarSlice } from "./toggleSlice";
import { bannerSlice } from "./toggleSlice";
import { authenticationSlice } from "./AuthenticationSlice";
import { ModalSlice } from "./ModalSlice";
import { userInformationSlice } from "./userInformationSlice";
import { propertiesSlice } from "./PropertiesSlice";
import { detailPageSlice } from "./detailPageSlice";
import { AccomodationSlice } from "./AccomodationSlice";
import {favoritesSlice} from './FavoritesSlice'
const store = configureStore({
    reducer: {
            searchInputReducer:searchInputSlice.reducer,
            ProfileReducer:ProfileTogglesSlice.reducer,
            sideBarReducer:sideBarSlice.reducer,
            bannerReducer:bannerSlice.reducer,
            authenticationReducer:authenticationSlice.reducer,
            modalReducer:ModalSlice.reducer,
            propertiesReducer:propertiesSlice.reducer,
            userInformationReducer:userInformationSlice.reducer,
            detailPageReducer:detailPageSlice.reducer,
            accomodationReducer:AccomodationSlice.reducer,
            detailSliceReducer:detailSliderSlice.reducer,
            favoritesReducer:favoritesSlice.reducer
    }
})

export default store