import { useContext } from 'react'
import {useState} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './Button.css'

const Button = ({content,action,clase}) => {
    const {theme} = useContext(ThemeContext)
    const [isHover, setIsHover] = useState(false)
  return (
    <button className={`button ${clase}`}
    style={{
        color:theme.text,
        backgroundColor: isHover && theme.background === '#fff'?
        '#1D9BF0'
         :
          (isHover && theme.background === "#000000" ?
           '#1D9BF0' : 
           theme.background)
    }}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    onClick={()=>{
     
        return action? action() : false
    }}
    >{content}</button>
  )
}

export default Button