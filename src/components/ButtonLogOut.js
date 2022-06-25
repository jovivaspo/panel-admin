import {useState} from 'react'
import './ButtonLogOut.css'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/reducer/adminReducer'
import { useNavigate } from 'react-router-dom'
import { setMessage } from '../redux/reducer/messageReducer'

const ButtonLogOut = ({theme}) => {

    const [isHover, setIsHover] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

  return (
    <button  className='button-logout'
    style={{
        color:theme.text,
        backgroundColor: isHover && theme.background === '#fff'?
         'rgb(224, 224, 224)'
          :
           (isHover && theme.background === "#000000" ?
            '#242323' : 
            theme.background)
    }}
    onClick={()=>{
      dispatch(logOut())
      navigate('/login')
      dispatch(setMessage({
        message:"Ha cerrado sesión",
        type:"info"
      }))
    }}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}

    >Log Out</button>
  )
}

export default ButtonLogOut