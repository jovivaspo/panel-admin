import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../reducer/userReducer"
import messageReducer from "../reducer/messageReducer"
import usersReducer from '../reducer/usersReducer'

 const store = configureStore({
    reducer:{
        user: userReducer,
        message: messageReducer,
        users: usersReducer
    },
   
 })

 export {store}