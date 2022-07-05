import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import EditSvg from './EditSvg'
import './EditBtn.css'
import { useNavigate } from 'react-router-dom'

const EditBtn = ({userID}) => {
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate()

    const handleEdit = () => {
      navigate(`/user/${userID}`)
    }

  return (
    <button className='opt-btn' onClick={handleEdit}>
        <EditSvg stroke={theme.text}/>
    </button>
  )
}

export default EditBtn