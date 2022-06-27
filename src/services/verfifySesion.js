import { logOut } from "../redux/reducer/adminReducer"
import { setMessage } from "../redux/reducer/messageReducer"

const verifySesion = ( error, thunkAPI) => {
    console.log(error)
    if (error === "jwt expired") {
        const message = "La sesión ha caducado"
        thunkAPI.dispatch(setMessage({
            message: message,
            type: "error"
        }))
        thunkAPI.dispatch(logOut())
        
        return message
    }

    else return null
}

export {verifySesion}