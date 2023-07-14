import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const searchInputSlice = createSlice({
    name:'Search Input Slice',
    initialState: {
        openedSearchInput:false
    },
    reducers: {
        openSearchInput:(state,action) => {
            state.openedSearchInput = true
        },
        closeSearchInput:(state,action) => {
            state.openedSearchInput = false
        }
    }
})


export const sideBarSlice = createSlice({
    name:'Aside Toggles',
    initialState : {
        openedSidebar:false
    },
    reducers: {
        openSideBar:(state,action) => {
            state.openedSidebar = true
        },
        closeSideBar:(state,action) => {
            state.openedSidebar = false
        },
        toggleSideBar:(state,action) => {
            state.openedSidebar = !state.openedSidebar
        }
    }
})


export const bannerSlice = createSlice({
    name:'Banner Toggle',
    initialState: {
        openedBannerInput:false
    },
    reducers : {
        openBannerInput:(state,action) => {
            state.openedBannerInput = true
        },
        closeBannerInput:(state,action) => {
            state.openedBannerInput = false
        },
        toggleBannerInput:(state,action) => {
            state.openedBannerInput = !state.openedBannerInput
        }

    }
})


