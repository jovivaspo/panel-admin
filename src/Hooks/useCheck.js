import { useEffect } from "react"
import { useState } from "react"

export const useCheck = (users) => {
    const [mainCheck, setMainCheck] = useState(false)
    const [listCheck ,setListCheck] = useState([])

    useEffect(()=>{
        if(!mainCheck){
            setListCheck([])
        }else{
            setListCheck(users.map(el=>el._id))
        }
    },[mainCheck])

    const handleListCheck = (id) => {
        !listCheck.includes(id)?  setListCheck([...listCheck,id]) : setListCheck(listCheck.filter(el=>el!==id))
    }

    return { mainCheck, setMainCheck, handleListCheck, listCheck }

}