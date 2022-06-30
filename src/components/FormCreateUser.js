import React from 'react'
import { useState, useEffect } from 'react'
import './FormCreateUser.css'
import Button from './Button'
import {useDispatch,useSelector} from 'react-redux'
import { createUser } from '../redux/reducer/usersReducer'
import { setMessage } from '../redux/reducer/messageReducer'

const initialForm = {
    name: "",
    email: "",
    password: ""
}
const FormCreateUser = ({ handleModal }) => {

    const dispatch = useDispatch()
    const {token} = useSelector(state => state.admin)

    const [form, setForm] = useState(initialForm)
    const [warn, setWarn] = useState("")


    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(()=>{
        if(warn!==""){
            const time = setTimeout(()=>{
                setWarn("")
            },3500)

            return  ()=> clearTimeout(time)
        }
    },[warn])

    const handleCreate = () => {
        const {name, email, password } = form 
        if (name === "" ||
            email === "" ||
            password === "") {
            return setWarn("Rellene todos los campos")
        }

        if (!form.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

            return setWarn("Formato de correo no válido")
        }
      
        dispatch(createUser({token, name, email, password}))
        .unwrap()
        .then(res=>{
            handleModal()
            dispatch(setMessage({
                message : res.message,
                type:"success"
            }))
        })
        .catch(err=>handleModal())
        
    }

    return (
        <div className='container-form-newUser'>
            <h3 className='title-form-newUser'>Crea un nuevo usuario</h3>
            <form className='form-newUser'>
                <input type="text" name='name' onChange={handleChange} value={form.name} placeholder="Nombre" autoComplete='off' />
                <input type="text" name='email' onChange={handleChange} value={form.email} placeholder="Email" autoComplete='off' />
                <input type="text" name='password' onChange={handleChange} value={form.password} placeholder="Password" autoComplete='off' />
            </form>
            {warn && <div className='container-warn'>
                <p className='text-warn'>{warn}</p>
            </div>}
            <div className='container-btn'>
                <Button content={"Crear"} action={handleCreate} />
                <Button content={"Cerrar"} action={handleModal} />
            </div>

        </div>
    )
}

export default FormCreateUser