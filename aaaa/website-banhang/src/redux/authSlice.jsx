import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name :"user",
    initialState:{
        isLoggedIn:false,
        accessToken : null,
        userInfor : {},
        role:null
    },
    reducers:{
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.accessToken = action.payload.accessToken;
            state.userInfor = action.payload.dataUser;
            state.role = action.payload.role; 
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.accessToken = null;
            state.userInfor = {};
            state.role = null;
        },
        updateUserInfo:(state,action)=>{
            state.userInfor = action.payload
        }
    }

})

export default authSlice