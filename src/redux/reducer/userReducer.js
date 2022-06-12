import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { helpHttp } from "../../services/helpHttp"
import { api } from "../../services/urlApi"

export const login = createAsyncThunk('/login',
    async (email,password)=> {
        return helpHttp().post(api.login,{
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                email,
                password
            }
        })
        .then(res=> console.log(res))
    })

const userSlice = createSlice({
    name: "user",
    initialState:{
        user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")) : null,
        error: null,
        loading: false
    },
    extraReducers:{
        [login.pending]: (state, action) => {
            state.loading =  true
        },
        [login.fulfilled]: (state,{payload})=>{
            state.user = payload
            state.loading = false
            
        },
        [login.rejected]: (state, payload) => {
            state.error = payload
        }
    }
   

}) 

export default userSlice.reducer

