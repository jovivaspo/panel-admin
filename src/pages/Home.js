import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../components/Button'
import Table from '../components/Table'
import { getUsers } from '../redux/reducer/usersReducer'
import useModal from '../hooks/useModal'
import ModalCreateUser from '../components/ModalCreateUser'



const Home = ({theme}) => {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.users)
  const admin = useSelector(state => state.admin)
  const {handleModal, show} = useModal()

  useEffect(() => {
    dispatch(getUsers(admin.token))
  }, [])
  
  return (
    <>
      {users?.length === 0 ?
        <h4 style={{
          margin:40
        }}>No hay usuarios registrados</h4>
        :
        <Table rows={users} />}
        <Button content={"Crear Usuario"} theme={theme} clase={"create-user"} action={handleModal}/>
        {show && <ModalCreateUser handleModal={handleModal}/>}
    </>
  )

}

export default Home