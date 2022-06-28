import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import EditSvg from './EditSvg'
import './EditBtn.css'
import { useSelector } from 'react-redux'

const EditBtn = ({userID}) => {
    const {token} = useSelector(state => state.admin)
    const {theme} = useContext(ThemeContext)

  return (
    <button className='opt-btn'>
        <EditSvg stroke={theme.text}/>
    </button>
  )
}

export default EditBtn