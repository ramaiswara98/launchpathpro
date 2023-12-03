import React from 'react'

import './Input.css'

function Input({placeholder,name,type,label}) {
  return (
    <div>
        <p className='input-label' style={{display:label?'blcok':'none'}}>{label}</p>
        <input 
            type={type}
            placeholder={placeholder}
            name={name}
            className='input'
        />
    </div>
  )
}

export default Input