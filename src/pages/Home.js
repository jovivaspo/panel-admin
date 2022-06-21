import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../redux/reducer/usersReducer'


const Home = () => {
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.users)
  const admin = useSelector(state => state.admin)

  useEffect(() => {
      dispatch(getUsers(admin.token))
  }, [])
  return (
    <div>
    
    </div>
  )
}

export default Home