import React from 'react'
import { useState } from 'react'
import './FormCreateUser.css'
import Button from './Button'

const initialForm = {
    nama: "",
    email: "",
    password: ""
}
const FormCreateUser = ({ handleModal }) => {
    const [form, setForm] = useState(initialForm)
    const handleChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div className='container-form-newUser'>
            <h3 className='title-form-newUser'>Crea un nuevo usuario</h3>
            <form className='form-newUser'>
                <input type="text" name='name' onChange={handleChange} value={form.name} placeholder="Nombre" autoComplete='off'/>
                <input type="text" name='email' onChange={handleChange} value={form.email} placeholder="Email" autoComplete='off'/>
                <input type="text" name='password' onChange={handleChange} value={form.password} placeholder="Password" autoComplete='off' />
            </form>
            <div className='container-btn'>
                <Button content={"Crear"} action={handleModal} />
                <Button content={"Cerrar"} action={handleModal} />
            </div>

        </div>
    )
}

export default FormCreateUser