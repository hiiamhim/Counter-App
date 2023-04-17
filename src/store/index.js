import {createStore} from 'redux'
import {createSlice,configureStore} from '@reduxjs/toolkit'
import authSlice from "./authstore"
const initialState={counter:0,showCounter:true} 

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        //Here you can mutate the existing state because behind the scene the package is creating its new clone and keeping the unchanged value intact in new object so no ovrwriting
        increment(state,action){
            state.counter=state.counter+1
        },
        decrement(state,action){
            state.counter--;
        },
        toggleCounter(state,action){
        state.showCounter=!state.showCounter
        }
    }
})

// const reducerFunc=(prevstate=initialState,action)=>{
 
//     if(action.type==='increment'){
//      return {
//         counter:prevstate.counter+1,
//         showCounter:prevstate.showCounter
//      }
//     }

//     if(action.type==='decrement'){
//         return {
//             counter:prevstate.counter-1,
//             showCounter:prevstate.showCounter
//         }

//     }

//     if(action.type==='toggle'){
//         return {
//             counter:prevstate.counter,
//             showCounter:!prevstate.showCounter
//         }
//     }

//     return prevstate
// }

// const store=createStore(reducerFunc)

const store=configureStore({
    ///here we can passs diffreernt reducer in a single main store 
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
})

export const authAction=authSlice.actions
export const counterAction=counterSlice.actions
export default store
