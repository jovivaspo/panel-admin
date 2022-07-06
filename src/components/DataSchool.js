import React from 'react'
import { useState } from 'react'
import ButtonEdit from './ButtonEdit'


const DataSchool = ({user, theme, token}) => {
    const [school,setSchool] = useState(user.school || {
        'name': "",
        'cp': "",
        'location': "",
        'tel':"",
        'cc':'',
        'email': "",
        'web':""
    })

    const handleChange = (e) => {
     
        setSchool({...school,[e.target.name]:e.target.value})
    }


  return (
    <>
            <h2 className='title-user'>colegio</h2>
            <div className='container-datauser'>
                <form className='form-datauser'>

                    {Object.keys(school).map((key, index) => {
                         const value = school[key]
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
                                        value={value? value : ""}
                                        onChange={handleChange}
                                        autoComplete='off'
                                       />
                                </div>
                            )
                        

                    })}
                </form>
                <ButtonEdit token={token} userID={user._id} body={school}/>
            </div>
        </>
  )
}

export default DataSchool