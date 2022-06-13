import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../reducer/userReducer"
import messageReducer from "../reducer/messageReducer"

 const store = configureStore({
    reducer:{
        user: userReducer,
        message: messageReducer
    },
   
 })

 export {store}