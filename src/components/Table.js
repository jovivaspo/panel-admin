import React from 'react'
import './Table.css'
import Columns from './Columns'
import Rows from './Rows'

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
        name:"Opciones",
        id:"options"
    }
]

const Table = ({ rows }) => {

    return (
        <div className='container-table'>
            <table>
               <Columns columnHead={columnHead}/>
            <Rows rows={rows} columnHead={columnHead} />
            </table>
        </div>
    )
}

export default Table