import { setMessage } from "../redux/reducer/messageReducer"
import { logOut } from "../redux/reducer/adminReducer"
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux/es/exports'


const useLogOut = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logOutAction = () => {
        dispatch(logOut())
        navigate('/login')
        dispatch(setMessage({
            message: "Ha cerrado sesión",
            type: "info"
        }))
    }

    return { logOutAction }
}

export  {useLogOut}