import { useContext, useState } from 'react'
import './ButtonTheme.css'
import { ThemeContext } from '../context/ThemeContext'
import { WiDaySunny, WiMoonAltWaxingCrescent3 } from "react-icons/wi";

const ButtonTheme = () => {
  const [isHover, setIsHover] = useState(false)
   const {handleChange, changeTheme, theme} = useContext(ThemeContext)
  return (
    <button onClick={handleChange} className="button-theme"
    style={{
      backgroundColor: isHover && theme.background === '#fff'?
       'rgb(224, 224, 224)'
        :
         (isHover && theme.background === "#000000" ?
          '#242323' : 
          theme.background)
  }}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}>
        {changeTheme === 2?
        <WiDaySunny size={32} color={theme.text}/> :
        <WiMoonAltWaxingCrescent3 size={32} color={theme.text}/>
    }
    </button>
  )
}

export default ButtonTheme