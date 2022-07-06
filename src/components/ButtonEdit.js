import React from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { editUser } from '../redux/reducer/userReducer'
import {useNavigate} from 'react-router-dom'
import { setNotLoading } from '../redux/reducer/loadingReducer'
import Loader from './Loader'

const ButtonEdit = ({ token, userID, body }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {loading} = useSelector(state => state.loading)

    const handleEdit = (e) => {
        const confirm = window.confirm('¿Desea guardar los cambios?')
        if(!confirm) return false
        dispatch(editUser({ token, userID, body }))
        .unwrap()
        .then(res=>{
            setTimeout(()=>{
                dispatch(setNotLoading())
                window.location.href = window.location.href
            },2000)
        })
        .catch(err=> dispatch(setNotLoading()))
       
    }

    return (
        <div className='container-btn-edit-user'>
            <Button
                content={!loading? "Guardar": <Loader size={30}/>}
                action={handleEdit}
                clase="btn-edit-user"
            />
        </div>

    )
}

export default ButtonEdit