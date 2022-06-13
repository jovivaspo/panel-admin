import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:"message",
    initialState:{
        message: ""
    },
    reducers: {
        setMessage: (state, action)=>{
            return {message:action.payload}
        },
    
        clearMessage : () => {
            return {message:""}
        }
    }

})

const {reducer,actions} = messageSlice
export const {setMessage,clearMessage} = actions
export default reducer