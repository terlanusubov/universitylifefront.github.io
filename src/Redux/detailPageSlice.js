import { createSlice } from "@reduxjs/toolkit";


export const  detailPageSlice = createSlice({
    name:'Detail Page',
    initialState: {
        currentUniversityId:''    
    },
    reducers: {
        setCurrentUniversityId:(state,action) => {
            state.currentUniversityId = action.payload
        }
    }
})