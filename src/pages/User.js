import { useEffect } from "react"
import { useState } from "react"
import { users } from "../services/users"
import {useParams} from 'react-router-dom'

const User = () => {
  const [user, setUser] = useState()
  const {id} = useParams()
    console.log(id)

  useEffect(()=>{
    users.get(id).then(res=>console.log(res))
  },[])

  return (
    <div>User</div>
  )
}

export default User