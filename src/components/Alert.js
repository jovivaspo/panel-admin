import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { clearMessage } from '../redux/reducer/messageReducer'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))

function TransitionRight(props) {
    return <Slide {...props} direction="right" />;
  }


const Alert = () => {
    const [open, setOpen] = React.useState(false)
    const {message} = useSelector(state => state.message)
    const dispatch = useDispatch()
   
    const handleClose = () => {
      setOpen(false)
    }

    useEffect(()=>{
        if(message !== ""){
            setOpen(true)

            const timeMessage = setTimeout(()=>{
                handleClose()
                dispatch(clearMessage())
            },3000)

            return ()=>clearTimeout(timeMessage)
        }



    },[message])

    console.log(message)
  
    return (
      <div>
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={TransitionRight}
          message={message}
        />
      </div>
    )
}

export default Alert