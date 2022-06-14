import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { auth } from "../../services/auth"
import { setMessage } from "./messageReducer"


export const login = createAsyncThunk('/login',
    async ({ email, password }, thunkAPI) => {
        try {
            const res = await auth.login(email, password)
            if(res.error){
                return thunkAPI.rejectWithValue(res.error)
            }
         
          
            thunkAPI.dispatch(setMessage(res.message))
            return res.token
            
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    })

export const logOut = createAsyncThunk("/logout", async () => {
    auth.logOut()
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
        loading: false,
        error:""
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true
            state.error = ""

        },
        [login.fulfilled]: (state, action) => {
            state.token = action.payload
            state.loading = false

        },
        [login.rejected]: (state, action) => {
            state.error =  action.payload
            state.token = null
            state.loading = false
        },
        [logOut.fulfilled]: (state) => {
            state.token = null
            state.loading = false
            state.error = ""
        }
    }


})

export default userSlice.reducer

