import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../components/Table'
import { getUsers } from '../redux/reducer/usersReducer'



const Home = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.users)
  const admin = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(getUsers(admin.token))
  }, [])
  console.log(users)
  return (
    <>
      {users.length === 0 ?
        <h4 style={{
          margin:40
        }}>No hay usuarios registrados</h4>
        :
        <Table rows={users} />}
    </>

  )

}

export default Home