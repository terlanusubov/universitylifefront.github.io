import {createSlice} from '@reduxjs/toolkit'

export const authenticationSlice = createSlice({
    name:'Authenticate',
    initialState : {
        isAuth:true
    },
    reducers: {
        setAuth:(state,action) => {
            state.isAuth = action.payload
        }
    }
})