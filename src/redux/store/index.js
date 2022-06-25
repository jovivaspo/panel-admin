import { configureStore } from '@reduxjs/toolkit'
import adminReducer from "../reducer/adminReducer"
import loadingReducer from '../reducer/loadingReducer'
import messageReducer from "../reducer/messageReducer"
import usersReducer from '../reducer/usersReducer'

 const store = configureStore({
    reducer:{
        admin: adminReducer,
        message: messageReducer,
        users: usersReducer,
        loading: loadingReducer
    },
   
 })

 export {store}