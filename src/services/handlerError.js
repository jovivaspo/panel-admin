import {logOut} from '../redux/reducer/adminReducer'
const jwtError = {
    "JsonWebTokenError": "Permiso denegado",
    "TokenExpiredError": "Sesión caducada"
}

export const handlerError = (error, thunkApi)=>{
    console.log(error)
    const message = jwtError[error] || null

    if (message){
        thunkApi.dispatch(logOut())
        return message
    }

    return error
}