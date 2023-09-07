import { createSlice } from "@reduxjs/toolkit";

export const propertiesSlice = createSlice({
    name:"Popular Properties",
    initialState: {
        currentCountry:'',
        currentCity:''
    },
    reducers: {
        setCurrentCountry: (state,action) => {
            state.currentCountry = action.payload
        },
        setCurrentCity:(state,action) => {
            state.currentCity = action.payload
        }
    }
})