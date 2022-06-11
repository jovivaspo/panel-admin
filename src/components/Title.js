import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    title:{
        color:theme.palette.text.primary,
        fontSize:32,
        fontWeight:"400"
    }
}))

const Title = ({title}) => {
    const classes = useStyles()
  return (
   <Typography variant='h1' className={classes.title}>{title}</Typography>
  )
}

export default Title