import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = ({theme}) => {
    const [isHover, setIsHover] = useState(false)
  return (
    <div>
         <ul className='menu'>
                <li className='menu-item'>
                    <Link to={'/'} className='item' style={{
                        color:theme.text
                    }}>Usuarios</Link>
                </li>
                <li className='menu-item' style={{
                    "&:hover": {
                        background: "#efefef"
                      },
                }}>
                    <Link to={'/notas'} className='item' style={{
                        color:theme.text
                    }}>Notas</Link>
                </li>
            </ul>
    </div>
  )
}

export default Menu