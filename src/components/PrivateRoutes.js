import React from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { Layout } from './Layout'
import Sidebar from './Sidebar'

const PrivateRoutes = ({ children }) => {

    const admin = useSelector(state => state.admin)
    const { theme } = useContext(ThemeContext)

    return (
        admin.token ?
            <div className='app' style={{
                backgroundColor: admin.token ? theme.background : '#fff'
            }}>
                <Layout theme={theme}>
                    <Sidebar theme={theme} />
                        {children}
                </Layout>
            </div >


            :
            <Navigate to="/login" />

    )
}

export default PrivateRoutes