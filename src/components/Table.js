import React from 'react'
import './Table.css'
import Columns from './Columns'
import Rows from './Rows'
import { useCheck } from '../hooks/useCheck'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { deleteSomeUser, deleteUser } from '../redux/reducer/usersReducer'

const columnHead = [
    {
        name: "Select",
        id: "select"
    },
    {
        name: "ID",
        id: '_id',
    },
    {
        name: "Nombre",
        id: 'name',
    },
    {
        name: "E-mail",
        id: 'email',
    },
    {
        name: "Estado",
        id: 'verified',
    },
    {
        name: "Usuario desde",
        id: 'createdAt',
    },
    {
        name: "Opciones",
        id: "options"
    }
]

const Table = ({ users }) => {

    const dispatch = useDispatch()
    const {token} = useSelector(state => state.admin)

    const { mainCheck, setMainCheck, handleListCheck, listCheck, setListCheck } = useCheck(users)

    console.log(listCheck)

    const handleDeleteBtn = () =>{
        const confirm = window.confirm("¿Desea borrar el usuario?")
        if (!confirm) return false
        Promise.all(listCheck.map(id=>{
            return dispatch(deleteUser({token,userID:id}))
        }))
        .then(res=>{
            listCheck.forEach(id=>{
                setListCheck(listCheck.filter(el=>el!==id))
                if(mainCheck) setMainCheck(false)
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className='container-table'>
            <table>
                <Columns columnHead={columnHead} mainCheck={mainCheck} setMainCheck={setMainCheck} />
                <Rows rows={users} columnHead={columnHead} listCheck={listCheck} handleListCheck={handleListCheck} />
            </table>
            <div style={{
                position: "relative",
                width: "100%",
                background:"red"
            }}>
                {listCheck.length !== 0 && <Button content={`Borrar (${listCheck.length})`} clase={"btn-del-out-table"} action={handleDeleteBtn}/>}
            </div>

        </div>
    )
}

export default Table