import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name:'Favorites',
    initialState: {
        favorites:[]
    },
    reducers: {
        setFavorites:(state,action) => {
            state.favorites = action.payload
        }
    }
})