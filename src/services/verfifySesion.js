import { logOut } from "../redux/reducer/adminReducer"
import { setMessage } from "../redux/reducer/messageReducer"

const jswError = {
    "JsonWebTokenError": "Permiso denegado",
    "TokenExpiredError": "Sesión caducada"
}

const verifySesion = (error, thunkAPI) => {
    console.log(error)
    const message = jswError[error] || null
    
    if (message) {

        thunkAPI.dispatch(setMessage({
            message,
            type: "error"
        }))

        thunkAPI.dispatch(logOut())
    }
    return message
}

export { verifySesion }