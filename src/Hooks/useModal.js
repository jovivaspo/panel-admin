import { useEffect } from 'react'
import { useState } from 'react'

const useModal = () => {
    const [show, setShow] = useState(false)
 
    
  const handleModal = () => {
    console.log("tal")
    setShow(!show)
  }


    return {handleModal, show}
 
}

export default useModal