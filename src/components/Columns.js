import React from 'react'


const Columns = ({ columnHead }) => {
    return (
        <thead>
            <tr>
                {columnHead.map((column, index) => {
                    if (column.name === 'Select') {
                        return (
                            <th key={index}><input type="checkbox" /></th>
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