import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { clearMessage, setMessage } from '../redux/reducer/messageReducer'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { logOut } from '../redux/reducer/userReducer';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        }, 
    }
}))



const Alert = () => {
    const navigate = useNavigate()
    const {message,type} = useSelector(state => state.message)
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
    }
      dispatch(clearMessage())
    }

    useEffect(()=>{
    
      if(message === "La sesión ha caducado"){
        console.log(message)
        navigate('/login')
        dispatch(logOut())
      }
    },[message])

    return (
      <div>
        <Snackbar
          autoHideDuration={3000}
          open={message? true : false}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
    
          onClose={handleClose}
          >
            <MuiAlert 
            onClose={handleClose}
            variant="filled"
            severity={type}>{message}</MuiAlert>
          </Snackbar>
      </div>
    )
}

export default Alert