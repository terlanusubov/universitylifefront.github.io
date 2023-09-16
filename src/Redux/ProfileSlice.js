import { createSlice } from "@reduxjs/toolkit";


export const ProfileTogglesSlice = createSlice({
    name:'ProfilePageToggles',
    initialState : {
        currentPage:'bookings',
        editMode:false
    },
    reducers: {
        setCurrentPage: (state,action) => {
            state.currentPage = action.payload
        },
        setEditMode:(state,action) => {
            state.editMode = action.payload
        }
    }

})