import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { helpHttp } from "../../services/helpHttp"
import { api } from "../../services/urlApi"
import { setMessage } from "./messageReducer"

export const getUsers = createAsyncThunk('/getUsers', async (token,thunkAPI) =>{
    try{
        const res = await helpHttp().get(api.users, {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            }
          })

          if(!res){
            thunkAPI.dispatch(setMessage({
                message:"Error en el servidor",
                type:"error"
              }))
            throw new Error('Error en el servidor')
          }

          if(res.error){
            let err
            if(res.error === "jwt expired") err = "La sesión ha caducado"
            thunkAPI.dispatch(setMessage({
                message:err || res.error,
                type:"error"
              }))
            return thunkAPI.rejectWithValue(res.error)
          }
          
          return res

    }catch(error){
     
        return thunkAPI.rejectWithValue(error.message)
    }
})

const userSlice = createSlice({
    name:"users",
    initialState:{
        users:[],
        
    },
    extraReducers:{
        [getUsers.fulfilled]: (state, action)=>{
            state.users = action.payload
        },
        [getUsers.rejected]: (state, action)=>{
           state.users = []
        }
    }

})

export default userSlice.reducer