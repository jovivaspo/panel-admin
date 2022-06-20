import { helpHttp } from "./helpHttp"
import { api } from "./urlApi"

const users = {}

users.get = (id)=>{
    try{
        helpHttp().get(`${api.user}/${id}`)
        .then(res=>console.log(res))
    }catch(err){
        console.log(err)
    }
    
}

users.delete = (id)=>{
    try{
        const confirmDelete = window.confirm("¿Desea eliminar este usuario?")
        if(!confirmDelete) return false
        helpHttp().del(`${api.users}/${id}`)
        .then(res=>console.log(res))
    }catch(err){
        console.log(err)
    }
    
}

export {users}