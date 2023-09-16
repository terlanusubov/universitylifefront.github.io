import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name:'ModalSlice',
    initialState:{
        isOpen:false
    },
    reducers :{
        setModal:(state,action) => {
            state.isOpen = action.payload
        },
        closeModal:(state) => {
            state.isOpen = false
        },
        openModal:(state) => {
            state.isOpen = true
        }
    }
})


export const modalActions = ModalSlice.actions;