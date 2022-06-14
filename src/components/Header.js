import {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ButtonTheme from './ButtonTheme'
import { useSelector } from 'react-redux/es/exports'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/reducer/userReducer'
import { useNavigate } from 'react-router-dom'
import { setMessage } from '../redux/reducer/messageReducer'




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    btnLogOut:{
        textDecoration: "none",
        color:"#fff",
        marginRight: theme.spacing(2),

        "&:hover":{
            fontWeight:"bold"
        }
    }

}));

const Header = () => {
    const classes = useStyles()
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const handleLogOut = () => {
        console.log("se pulsó")
        dispatch(logOut())
        dispatch(setMessage("Ha cerrado sesión"))

    }

    useEffect(()=>{
        if(user.token === null){
          navigate('/')
        }
      },[user.token])
    

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.menu}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Panel Admin
                    </Typography>
                    <ButtonTheme />
                    {user.token &&  <Button color='inherit' onClick={handleLogOut}>Logout</Button>}
                   
                </Toolbar>
            </AppBar>
        </div>
    );
}

export { Header }