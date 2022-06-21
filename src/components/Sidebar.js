import React from 'react'
import ButtonTheme from './ButtonTheme'
import './Sidebar.css'
import Menu from './Menu'

const Sidebar = ({ theme }) => {
    return (
        <div className='sidebar' style={{
            background: theme.backgroud,
            color: theme.text,
        }}>
            <h2>Dashborad</h2>
            <Menu theme={theme}/>
            <ButtonTheme />
        </div>
    )
}

export default Sidebar