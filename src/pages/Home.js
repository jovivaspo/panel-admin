import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../components/Table'
import { getUsers } from '../redux/reducer/usersReducer'



const Home = () => {
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.users)
  const admin = useSelector(state => state.admin)

  useEffect(() => {
    console.log('hola')
      dispatch(getUsers(admin.token))
  }, [])
  return (
    <>
     {users.length > 0 && <Table rows={users}/>}
    </>
  )
  
}

export default Home