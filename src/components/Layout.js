import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    layout: {
        height: '100vh',
        backgroundColor: theme.palette.secondary.main,
        padding:24,
    }
}))

const Layout = ({children}) => {
    const classes = useStyles()
    return (
                <div className={classes.layout}>
                    {children}
                </div>
    )
}

export { Layout }