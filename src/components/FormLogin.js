import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducer/adminReducer';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
import { setMessage } from '../redux/reducer/messageReducer';
import './FormLogin.css'
import Loader from './Loader';
import { setLoading, setNotLoading } from '../redux/reducer/loadingReducer';

const initialForm = {
    email: "",
    password: "",
    error: {
        email: "",
        password: ""
    }
}


const FormLogin = () => {
    const [form, setForm] = useState(initialForm)
    const{ loading} = useSelector(state => state.loading)
   
    const errorEmailRef = useRef()
    const errorPasswordRef = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }


const handleSubmit = (e) => {

        e.preventDefault()

        errorPasswordRef.current.innerText = ""

        errorEmailRef.current.innerText = ""

        if (form.email === "") errorEmailRef.current.innerText = "Complete este campo"

        if (form.password === "") errorPasswordRef.current.innerText = "Complete este campo"

        if (form.email === "" || form.password === "") return false

        if (!form.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

            errorEmailRef.current.innerText = "Formato de correo no válido"

            return false
        }

        dispatch(setLoading())
        dispatch(login({ email: form.email, password: form.password }))
        .unwrap()
        .then((token) => {
            localStorage.setItem("token", token)
            navigate("/usuarios")
            dispatch(setNotLoading())
        })
        .catch(error=>{
            if (error === "Correo incorrecto"){
                errorEmailRef.current.innerText = "Correo incorrecto"
            }
            if (error === "La contraseña no es correcta"){
                errorPasswordRef.current.innerText = "La contraseña no es correcta"
            }else{
              
                dispatch(setMessage({message: "Lo sentimos, inténtelo más tarde",
                type:"error"
            }))
                setForm(initialForm)
                dispatch(setNotLoading())
            }

        })
}



return (
    <div className='container-login'>
        <h2 className='title-login'>Iniciar sesión</h2>
        <p className='subtitle-login'>Panel de administrador</p>
        <form className='form-login' onSubmit={handleSubmit}>
            <input className='input-email' type="text" name='email' placeholder='email' value={form.email} autoComplete='off' onChange={handleChange}/>
            <span className='error-login' ref={errorEmailRef}></span>

            <input className='input-password' type="password" name='password' placeholder='password' value={form.password} autoComplete='off' onChange={handleChange}/>
            <span className='error-login' ref={errorPasswordRef}></span>
            <button className='btn-login' type='submit'>{loading === false? "Login" : <Loader size={30}/>}</button>
        </form>
    </div>
)
}

export default FormLogin