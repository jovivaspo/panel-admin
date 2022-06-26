import React from 'react'
import {getDate} from '../services/getDate'

const Rows = ({rows,columnHead}) => {
    return (
        <tbody>
            {rows.map((row, index) => {
                return (
                    <tr key={index} >{
                        columnHead.map((col, index) => {
                            if (col.id === "select") {
                                return (
                                    <td key={index}><input type="checkbox" /></td>
                                )
                            }
                            if (col.id === '_id') {
                                return (
                                    <td key={index} className={col.id}>
                                        <p>{row[col.id].slice(0, 4) + '...'}</p>
                                    </td>
                                )
                            }
                            if (col.id === 'verified') {
                                return (
                                    <td key={index} className={col.id}><p
                                        style={{
                                            color: row[col.id] === 'Not verified' ?
                                                'red' : 'green'
                                        }}
                                    >{row[col.id]}</p>
                                    </td>
                                )
                            }
                            if (col.id === 'createdAt') {
                                return (
                                    <td key={index}
                                        className={col.id}>
                                        <p>{getDate(row[col.id])}</p>
                                    </td>
                                )
                            }
                            return (
                                <td key={index} className={col.id}>
                                    <p>{row[col.id]}</p>
                                </td>
                            )
                        })
                    }</tr>
                )
            })}
        </tbody>
    )
}

export default Rows