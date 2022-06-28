import React from 'react'
import ButtonTheme from './ButtonTheme'
import './Sidebar.css'
import Menu from './Menu'
import ButtonLogOut from './ButtonLogOut'

const Sidebar = ({ theme }) => {
    console.log(theme)
    return (
        <div className='sidebar' style={{
            background: theme.background,
            color: theme.text,
        }}>
            <h2 className='title-dashboard'>Dashborad</h2>
            <Menu theme={theme} />
            <div>
                <ButtonLogOut theme={theme} />
                <ButtonTheme />
            </div>

        </div>
    )
}

export default Sidebar