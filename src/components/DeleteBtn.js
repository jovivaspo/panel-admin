import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import DeleteSvg from './DeleteSvg'
import './EditBtn.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../redux/reducer/usersReducer'
import { setMessage } from '../redux/reducer/messageReducer'

const DeleteBtn = ({ userID }) => {
    const { theme } = useContext(ThemeContext)
    const { token } = useSelector(state => state.admin)
   
    const dispatch = useDispatch()

    const handlerDelete = () => {
        const confirm = window.confirm("¿Desea borrar el usuario?")
        if (!confirm) return false
        dispatch(deleteUser({token, userID}))
        .unwrap()
        .then(res=>{
            dispatch(setMessage({
                message:res.message,
                type:"info"
            }))
        })
    }
    return (
        <button className='opt-btn' onClick={handlerDelete}>
            <DeleteSvg stroke={theme.text} />
        </button>
    )
}

export default DeleteBtn