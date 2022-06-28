import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { helpHttp } from "../../services/helpHttp"
import { api } from "../../services/urlApi"
import { setMessage } from "./messageReducer"
import { handlerError } from "../../services/handlerError"

export const getUsers = createAsyncThunk('/getUsers', async (token, thunkAPI) => {
  try {
    const res = await helpHttp().get(api.users, {
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
      type: "error"
    }))
    return thunkAPI.rejectWithValue()
  }

})

export const deleteUser = createAsyncThunk('/deleteUser', async ({ token, userID }, thunkAPI) => {
  try {

    const res = await helpHttp().del(`${api.user}/${userID}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })

    if (res.error) {
      const error = handlerError(res.error, thunkAPI)

      throw new Error(error)

    }
    console.log(res)
    return res

  } catch (error) {
    console.log(error)
    thunkAPI.dispatch(setMessage({
      message: error.message,
      type: "error"
    }))
  }
  return thunkAPI.rejectWithValue()
})



const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],

  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload
    },
    [getUsers.rejected]: (state, action) => {
      
      state.users = []
    },
    [deleteUser.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.users = state.users.filter(user => user._id !== action.payload.id)
    },
    [deleteUser.rejected]: (state, action) => {
      state.users = state.users
    }
  }

})

export default userSlice.reducer