import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { helpHttp } from "../../services/helpHttp"
import { api } from "../../services/urlApi"
import { setMessage } from "./messageReducer"
import { handlerError } from "../../services/handlerError"


export const getUser = createAsyncThunk('/getUser', async ({ token, userID }, thunkAPI) => {
    try {

        const res = await helpHttp().get(`${api.user}/${userID}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        if (res.error) {
            const error = handlerError(res.error, thunkAPI)
            throw new Error(error)
        }

        return res

    } catch (error) {
        console.log(error)
        thunkAPI.dispatch(setMessage({
            message: error.message,
            type: 'error'
        }))
        return thunkAPI.rejectWithValue()
    }
})


const userSlider = createSlice({
    name: "user",
    initialState: {},
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload.user
        },
        [getUser.rejected]: (state, action) => {
            state.user = {}
        }
    }
})

export default userSlider.reducer

