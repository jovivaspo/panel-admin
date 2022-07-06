import { useState } from 'react'
import { getDate } from '../services/getDate'
import './DataUser.css'

const DataUser = ({ user, theme }) => {
    return (
        <>
            <h2 className='title-user'>{user.name}</h2>
            <div className='container-datauser'>
                <form className='form-datauser'>

                    {Object.keys(user).map((key, index) => {
                        const value = user[key]
                        if (key !== 'notes' && key !=='school') {
                            return (
                                <div className='container-input' key={index}>
                                    <label htmlFor={key}>{key}: </label>
                                    <input style={{
                                        background: theme.background,
                                        color: theme.text
                                    }}
                                        className={`input-${key}`}
                                        id={key} type="text"
                                        name={key}
                                        placeholder={key}
                                        value={key === 'createdAt' || key === 'updatedAt'? getDate(value) : value}
                                        disabled />
                                </div>
                            )
                        }

                    })}
                </form>
            </div>
        </>

    )
}

export default DataUser