import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    username:"",
    email:""
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        increment: (state,action) => {
            state.username = action.payload.logindata.fullname || "";
            state.email = action.payload.logindata.email || "";
        }
    },
})

export const {increment} = counterSlice.actions;

export default counterSlice.reducer
