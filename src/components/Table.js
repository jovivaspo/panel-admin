import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { getDate } from '../services/getDate';
import { useNavigate } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { users } from '../services/users';
import { useState } from 'react';

const columns = [
    {
        field: 'id',
        width: 90,
        renderHeader: (params) => (
            <strong style={{ color: 'black' }}>
                ID
            </strong>
        ),
        renderCell: (params) => {
            return (
                <span style={
                    {
                        paddingLeft: 6,
                        color: 'black'
                    }
                }
                >{
                        params.row._id
                    }</span>
            )
        }

    },
    {
        field: 'name',
        width: 200,
        renderHeader: (params) => (
            <strong style={{ color: 'black' }}>
                Nombre
            </strong>),
        renderCell: (params) => {
            return (
                <span style={
                    {
                        paddingLeft: 6,
                        color: 'black'
                    }
                }
                >{
                        params.row.name
                    }</span>
            )
        }
    },
    {
        field: 'email',
        headerName: 'E-mail',
        width: 200,
        renderHeader: (params) => (
            <strong style={{ color: 'black' }}>
                Email
            </strong>),
        renderCell: (params) => {
            return (
                <span style={
                    {
                        paddingLeft: 6,
                        color: 'black'
                    }
                }
                >{
                        params.row.email
                    }</span>
            )
        }
    },
    {
        field: 'verified',
        headerName: 'Estado',
        width: 200,
        renderHeader: (params) => (
            <strong style={{ color: 'black' }}>
                Estado
            </strong>),
        renderCell: (params) => {
            return (
                <span style={
                    {
                        color: params.row.verified === "Not verified" ?
                            "red" : "green",

                    }
                }>{
                        params.row.verified === "Not verified" ?
                            "No verificado" : "Verificado"
                    }</span>
            )
        }

    },
    {
        field: 'createdAt',
        headerName: 'Usuario desde',
        width: 200,
        renderHeader: (params) => (
            <strong style={{ color: 'black' }}>
                Usuario desde
            </strong>),
        renderCell: (params) => {
            return (
                <span style={
                    {
                        paddingLeft: 6,
                        color: 'black'
                    }
                }
                >{
                        params.row.createdAt
                    }</span>
            )
        }
    },
    {
        field: 'url',
        headerName: 'Ver Usuario',
        width: 200,
        renderHeader: (params) => (
            <strong style={{ color: 'black' }}>
                Más...
            </strong>),
        renderCell: (params) => {
            return (
                <>
                 <button style={{
                    width: "34px",
                    backgroundColor: "transparent",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    marginRight:6,
                    cursor: "pointer"
                }
                }
                    onClick={() => params.row.url()}
                ><EditIcon /></button>
                <button style={{
                    width: "34px",
                    backgroundColor: "transparent",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    cursor: "pointer"
                    
                }
                }
                    onClick={() => users.delete(params.row._id)}
                ><DeleteIcon /></button>
                </>
               
            )
        }
    },

];



const Table = ({ users }) => {
    const navigate = useNavigate()
    const [selectionModel, setSelectionModel] = useState([])

    console.log(selectionModel)

    const rows = users.map((user, id) => {
        const { _id, name, email, verified } = user
        const createdAt = getDate(user.createdAt)
     

        return {
            id: _id,
            name,
            email,
            verified,
            createdAt,
            url: () => navigate(`/user/${_id}`)   
        }
    })

    return (
        <div style={{ height: 400, width: '60%', margin: '0 auto' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pverifiedSize={5}
                checkboxSelection
                disableSelectionOnClick
                rowHeight={36}

                onSelectionModelChange={(newSelectionModel) => {
                    setSelectionModel(newSelectionModel);
                  }}
                  selectionModel={selectionModel}
            />
        </div>
    );
}

export { Table }