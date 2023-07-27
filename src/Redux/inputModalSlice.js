import { createSlice } from "@reduxjs/toolkit";


export const inputModalSlice = createSlice({
    name:'Modal slice',
    initialState: {
        inputFocused:false
    },
    reducers: {
        focusInput:(state,action) => {
            state.inputFocused = true
        },
        blurInput:(state,action) => {
            state.inputFocused = false
        }
    }
})