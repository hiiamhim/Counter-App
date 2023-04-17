import {createSlice} from '@reduxjs/toolkit'
const authState={isAuthenticated:false}

const authSlice=createSlice({
    name:'auth',
    initialState:authState,
    reducers:{
        login(state,action){
            state.isAuthenticated=true

        },
        logout(state,action){
         state.isAuthenticated=false
        }
    }
})
export default authSlice