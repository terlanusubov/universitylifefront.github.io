import { createSlice } from "@reduxjs/toolkit";

export const propertiesSlice = createSlice({
    name:"Popular Properties",
    initialState: {
        currentCountry:'',
        currentCity:'',
        currentCityId:''
    },
    reducers: {
        setCurrentCountry: (state,action) => {
            state.currentCountry = action.payload
        },
        setCurrentCity:(state,action) => {
            state.currentCity = action.payload
        },
        setCurrentCityId:(state,action) => {
            state.currentCityId = action.payload;
        }
    }
})