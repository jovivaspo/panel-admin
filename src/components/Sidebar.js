import React from 'react'
import ButtonTheme from './ButtonTheme'
import './Sidebar.css'
import Menu from './Menu'
import Button from './Button'
import { useLogOut } from '../hooks/useLogOut'


const Sidebar = ({ theme }) => {

    const {logOutAction} = useLogOut()

    return (
        <div className='sidebar' style={{
            background: theme.background,
            color: theme.text,
        }}>
            <h2 className='title-dashboard'>Dashborad</h2>
            <Menu theme={theme} />
            <div>
                <Button content={"Log out"} action={logOutAction}/>
                <ButtonTheme />
            </div>

        </div>
    )
}

export default Sidebar