import { Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    layout: {
        height: '100vh',
        backgroundColor: '#fff',
        marginTop:24
    }
}))

const Layout = () => {
    const classes = useStyles()
    return (
                <Container maxWidth="lg" className={classes.layout} />
    )
}

export { Layout }