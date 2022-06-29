import React from 'react'
import FormCreateUser from './FormCreateUser'
import './Modal.css'



const ModalCreateUser = ({ handleModal }) => {


    return (
        <>
            <div className='modal' onClick={handleModal}></div>
            <FormCreateUser handleModal={handleModal} />
        </>
    )
}

export default ModalCreateUser