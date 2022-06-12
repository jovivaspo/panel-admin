import { configureStore } from '@reduxjs/toolkit'
import userReducers from "../reducer/userReducer"




 const store = configureStore({
    reducer:{
        user: userReducers
    },
   
 })

 export {store}