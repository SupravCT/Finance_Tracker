import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:{
        user:JSON.parse(localStorage.getItem('userInfo'))||null,     

    },
    reducers:{
        loginAction:(state,action)=>{
            state.user=action.payload
        },
        logoutAction:(state,action)=>{
            state.user=null
        }
    }
})

export const {loginAction,logoutAction}=userSlice.actions;

const authReducer=userSlice.reducer;

export default authReducer