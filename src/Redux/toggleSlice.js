import { createSlice } from "@reduxjs/toolkit";


export const searchInputSlice = createSlice({
    name:'Search Input Slice',
    initialState: {
        openedSearchInput:false
    },
    reducers: {
        toggleSearchInput:(state,action) => {

        }
    }
})