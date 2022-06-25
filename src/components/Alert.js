import { useRef } from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { clearMessage } from "../redux/reducer/messageReducer"
import './Alert.css'

const colorMessage = {
    "error": "#F44336",
    "warning" : "#FF9800",
    "info" : "#1D9BF0",
    "success" : "#4CAF50"
}

const Alert = () => {
    const message = useSelector(state => state.message)
    const dispatch = useDispatch()
    const alertRef  = useRef()

    useEffect(()=>{
        if(message.message !== ""){
            alertRef.current.classList.remove("hidden")
            const timeMessage = setTimeout(()=>{
                alertRef.current.classList.add("hidden")
            },2500)
            return ()=>{
                clearTimeout(timeMessage)}
        }
    },[])

    useEffect(()=>{
        if(message.message !== ""){
            const timeClearMessage = setTimeout(()=>{
                dispatch(clearMessage())
            },3000)
            return ()=>{
                clearTimeout(timeClearMessage)}
        }
    },[])

  return (
    <div className="container-alert hidden" ref={alertRef} style={{
        backgroundColor: colorMessage[message.type]
    }}>
        <p className="text-alert"
        style={{
            color:"#fff"
        }}
        >{message.message}</p>
    </div>
  )
}

export default Alert