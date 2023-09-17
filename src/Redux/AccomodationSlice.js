import { createSlice } from "@reduxjs/toolkit";

export const AccomodationSlice = createSlice({
    name:'Accomodation Slice',
    initialState: {
        currentFilterOptions: {
            universityId:'',
            cityId:''
        }
    },
    reducers: {
        setCurrentFilterOption:(state,action) => {
           state.currentFilterOptions.universityId = action.payload.universityId;
           state.currentFilterOptions.cityId = action.payload.cityId
        }
    }
})