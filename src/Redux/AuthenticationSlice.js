import {createSlice} from '@reduxjs/toolkit'

const token = localStorage.getItem('tokenId')

export const authenticationSlice = createSlice({
    name:'Authenticate',
    initialState : {
        isAuth:token ? true : false
    },
    reducers: {
        setAuth:(state,action) => {
            state.isAuth = action.payload
        }
    }
})