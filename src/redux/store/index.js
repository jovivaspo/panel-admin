import { configureStore } from '@reduxjs/toolkit'
import adminReducer from "../reducer/adminReducer"
import loadingReducer from '../reducer/loadingReducer'
import messageReducer from "../reducer/messageReducer"
import userReducer from '../reducer/userReducer'
import usersReducer from '../reducer/usersReducer'

 const store = configureStore({
    reducer:{
        admin: adminReducer,
        message: messageReducer,
        users: usersReducer,
        loading: loadingReducer,
        user: userReducer
    },
   
 })

 export {store}