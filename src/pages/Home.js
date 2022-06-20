import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { helpHttp } from '../services/helpHttp'
import { api } from '../services/urlApi'
import { getUsers } from '../redux/reducer/usersReducer'
import { Table } from '../components/Table'

const Home = () => {
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.users)
  const user = useSelector(state => state.user)

  useEffect(() => {
      dispatch(getUsers(user.token))
  }, [])
  return (
    <div>
     { users && <Table users={users}/>}
    </div>
  )
}

export default Home