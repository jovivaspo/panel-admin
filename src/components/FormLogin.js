import { useState, useRef } from 'react'
import { SpinnerCircular } from 'spinners-react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducer/adminReducer';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
import { setMessage } from '../redux/reducer/messageReducer';


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

    const errorEmailRef = useRef()
    const errorPasswordRef = useRef()
    const dispatch = useDispatch()
    const admin = useSelector(state => state.admin)
    const navigate = useNavigate()

    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }


const handleSubmit = () => {

  
        errorPasswordRef.current.innerText = ""

        errorEmailRef.current.innerText = ""

        if (form.email === "") errorEmailRef.current.innerText = "Complete este campo"

        if (form.password === "") errorPasswordRef.current.innerText = "Complete este campo"

        if (form.email === "" || form.password === "") return false

        if (!form.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {

            errorEmailRef.current.innerText = "Correo no válido"

            return false
        }


        dispatch(login({ email: form.email, password: form.password }))
        .unwrap()
        .then((token) => {
            localStorage.setItem("token", token)
            navigate("/")
        })
        .catch(error=>{
            //Error login.rejected
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
            }

        })
}



return (
    <div >
        <form >
           
        </form>

    </div>
)
}

export default FormLogin