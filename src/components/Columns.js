import React from 'react'
import { useCheck } from '../hooks/useCheck'


const Columns = ({ columnHead }) => {
    const {mainCheck, setMainCheck} = useCheck()
    console.log(mainCheck)
    return (
        <thead>
            <tr>
                {columnHead.map((column, index) => {
                    if (column.name === 'Select') {
                        return (
                            <th key={index}><input type="checkbox" value={mainCheck} onClick={()=>setMainCheck(!(mainCheck))}/></th>
                        )
                    }
                    return (
                        <th key={index}>{column.name}</th>
                    )
                })}
            </tr>
        </thead>
    )
}

export default Columns