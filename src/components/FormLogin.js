import { useState, useRef } from 'react'
import { Button, FormControl, makeStyles, Input, InputLabel, FormHelperText } from '@material-ui/core'
import Title from './Title'
import { SpinnerCircular } from 'spinners-react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducer/userReducer';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
import { setMessage } from '../redux/reducer/messageReducer';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    containerForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        width: 460,
        margin: '0 auto',
        marginTop: 24,
        padding: 16

    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 40,
        padding: 16,
        width: '90%'
    },

    error: {
        color: 'red'
    }

}))

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
    const user = useSelector(state => state.user)
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


const classes = useStyles()
return (
    <div className={classes.containerForm}>
        <Title title={"Inicia sesión"} />
        <form className={classes.form}>
            <FormControl >
                <InputLabel htmlFor="email">Correo</InputLabel>
                <Input
                    id="email"
                    name='email'
                    type='email'
                    value={form.email}
                    onChange={handleChange}
                />
                <FormHelperText className={classes.error} ref={errorEmailRef}></FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="password">Contraseña</InputLabel>
                <Input
                    id="password"
                    type="password"
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                />
                <FormHelperText className={classes.error} ref={errorPasswordRef}></FormHelperText>
            </FormControl>

            <Button variant="contained"
                className={classes.loginBtn}
                color="primary"
                onClick={handleSubmit}>
                {user.loading ? <SpinnerCircular size={30} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Login"}
            </Button>

        </form>

    </div>
)
}

export default FormLogin