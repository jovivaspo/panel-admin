import { useEffect } from 'react'
import { useState } from 'react'


const Check = ({ id, listCheck, handleListCheck }) => {

  const [check, setCheck] = useState(listCheck.includes(id))


  const handleCheck = () => {
    handleListCheck(id)
  }

  useEffect(()=>{
    setCheck(listCheck.includes(id))
  },[listCheck])


  return (
    <input type="checkbox" value={id} checked={check} onChange={handleCheck} />
  )
}

export default Check