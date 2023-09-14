import { createSlice } from "@reduxjs/toolkit";

export const userInformationSlice = createSlice({
    name:'User Information',
    initialState: {
        CurrentUserId:''
    },
    reducers: {
        setCurrentUserId:(state,action) => {
            state.CurrentUserId = action.payload
        }
    }
})