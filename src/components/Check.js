import { useEffect } from 'react'
import {useState} from 'react'


const Check = ({id, handleListCheck, mainCheck}) => {
    const [check ,setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(!check)
        handleListCheck(id)
    }

    useEffect(()=>{
        if(mainCheck){
            setCheck(true)
            handleListCheck(id,true)
        }
    },[mainCheck])

  return (
    <input type="checkbox" id={id} value={check} onClick={handleCheck}/>
  )
}

export default Check