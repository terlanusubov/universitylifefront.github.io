import { createSlice } from "@reduxjs/toolkit";


export const ProfileTogglesSlice = createSlice({
    name:'ProfilePageToggles',
    initialState : {
        currentPage:'bookings'
    },
    reducers: {
        setCurrentPage: (state,action) => {
            state.currentPage = action.payload
        }
    }

})