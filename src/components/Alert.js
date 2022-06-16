import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { clearMessage, setMessage } from '../redux/reducer/messageReducer'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        }, 
    }
}))



const Alert = () => {

    const {message,type} = useSelector(state => state.message)
    const dispatch = useDispatch()

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
    }
      dispatch(clearMessage())
    }

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