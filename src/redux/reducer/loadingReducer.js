import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name:"loading",
    initialState:{
        loading:false
    },
    reducers:{
        setLoading: ()=>{
          return { loading:true}
        },
        setNotLoading: ()=>{
            return {loading: false}
        }
    }
})

const {reducer, actions} = loaderSlice
export const {setLoading, setNotLoading} = actions
export default reducer