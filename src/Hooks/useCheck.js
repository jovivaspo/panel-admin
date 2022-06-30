import { useEffect } from "react"
import { useState } from "react"

export const useCheck = () => {
    const [mainCheck, setMainCheck] = useState(false)
    const [listCheck ,setListCheck] = useState([])

   console.log(listCheck)

    const handleListCheck = (id, main=false) => {
        console.log("first")
            if(!listCheck.includes(id)){
                console.log("tal")
                setListCheck([...listCheck,id]) 
               
             }else if(main === false){
                console.log("tal 1")
                setListCheck(listCheck.filter(check=>check!== id)) 
             }}
   

    return { mainCheck, setMainCheck, handleListCheck }

}