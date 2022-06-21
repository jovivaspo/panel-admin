import React from 'react'
import './Layout.css'

const Layout = ({theme,children}) => {
  return (
    <div className='layout-app' style={{
        backgroundColor:theme.backgroud,
        color:theme.text
    }}>
        {children}
    </div>
  )
}

export  {Layout}