import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/reducer/userReducer'
import { useParams } from 'react-router-dom'
import DataUser from '../components/DataUser'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import DataSchool from '../components/DataSchool'


const User = () => {
  const { token } = useSelector(state => state.admin)
  const { user } = useSelector(state => state.user)
  const { theme } = useContext(ThemeContext)
  const dispatch = useDispatch()
  const userID = useParams().id

  useEffect(() => {
    dispatch(getUser({ token, userID }))
  }, [])

  return (
    <div>{
      user &&
     ( <>
        <DataUser user={user} theme={theme} />
        <DataSchool user={user} theme={theme} token={token}/>
      </>)
    }
    </div>
  )
}

export default User