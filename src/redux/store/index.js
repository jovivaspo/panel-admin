import { configureStore } from '@reduxjs/toolkit'
import adminReducer from "../reducer/adminReducer"
import messageReducer from "../reducer/messageReducer"
import usersReducer from '../reducer/usersReducer'

 const store = configureStore({
    reducer:{
        admin: adminReducer,
        message: messageReducer,
        users: usersReducer
    },
   
 })

 export {store}