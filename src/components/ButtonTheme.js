import React, { useContext } from 'react'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Button from '@material-ui/core/Button';
import { ThemeContext } from '../context/ThemeContext';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  icon:{
    color:'#fff'
  }
}))

const ButtonTheme = () => {
    const {theme, handleTheme} = useContext(ThemeContext)
    const classes = useStyles();

  return (
    <Button onClick={handleTheme}>{
        theme === "light"?
         <Brightness3Icon className={classes.icon}/>
          : <Brightness5Icon className={classes.icon}/>
        }</Button>
  )
}

export default ButtonTheme