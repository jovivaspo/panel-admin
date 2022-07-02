import React from 'react'
import './Table.css'
import Columns from './Columns'
import Rows from './Rows'
import { useCheck } from '../hooks/useCheck'
import Button from './Button'

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

    const { mainCheck, setMainCheck, handleListCheck, listCheck } = useCheck(users)

    console.log(listCheck)

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
                {listCheck.length !== 0 && <Button content={`Borrar (${listCheck.length})`} clase={"btn-del-out-table"} />}
            </div>

        </div>
    )
}

export default Table