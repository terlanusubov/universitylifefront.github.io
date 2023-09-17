import { createSlice } from "@reduxjs/toolkit";
export const detailSliderSlice = createSlice( {

    name:'Slider Slice',
    initialState: {
        isSliceModalOpen:false
    },
    reducers: {
        setSliderModal:(state,action) => {
            state.isSliceModalOpen = action.payload
        }
    }
}
)