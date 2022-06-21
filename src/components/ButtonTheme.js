import React from 'react'
import { useContext } from 'react'
import './ButtonTheme.css'
import { ThemeContext } from '../context/ThemeContext'
import { WiDaySunny, WiMoonAltWaxingCrescent3 } from "react-icons/wi";

const ButtonTheme = () => {
   const {handleChange, changeTheme, theme} = useContext(ThemeContext)
  return (
    <button onClick={handleChange} className="button-theme">
        {changeTheme === 2?
        <WiDaySunny size={32} color={theme.text}/> :
        <WiMoonAltWaxingCrescent3 size={32} color={theme.text}/>
    }
    </button>
  )
}

export default ButtonTheme