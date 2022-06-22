import { useEffect } from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import './MenuItem.css'
import { useLocation } from 'react-router-dom'

const MenuItem = ({theme, link, text, icon}) => {
    const [isHover, setIsHover] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const location = useLocation()

    useEffect(()=>{
      location.pathname.includes(link) ?   setIsSelected(true) : setIsSelected(false)
    
    },[location])


  return (
    <li className='menu-item'
    style={{
        textDecoration: isSelected ? 'underline' : 'none',
        backgroundColor: isHover && theme.background === '#fff'?
         'rgb(224, 224, 224)'
          :
           (isHover && theme.background === "#000000" ?
            '#242323' : 
            theme.background)
    }}
     onMouseEnter={() => setIsHover(true)}
     onMouseLeave={() => setIsHover(false)}>
                    <Link to={link} className='item' style={{
                        color:theme.text
                    }}>{icon} {text}</Link>
                </li>
  )
}

export default MenuItem