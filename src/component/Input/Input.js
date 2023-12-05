import React from 'react'

import './Input.css'

function Input({placeholder,name,type,label,width,rows,onChange,value,maxLength}) {
  return (
    <div style={{width:width?width:'100%'}}>
        <p className='input-label' style={{display:label?'block':'none'}}>{label}</p>
        {type=== 'text-area'?(
          <textarea
            type={type}
            placeholder={placeholder}
            name={name}
            className='input'
            rows={rows}
            onChange={(e)=>onChange(e.target.value)}
            value={value}
            >

          </textarea>
        ):(
          <input 
            type={type}
            placeholder={placeholder}
            name={name}
            className='input'
            onChange={(e)=>onChange(e.target.value)}
            value={value}
            maxLength={maxLength}
        />
        )}
        
    </div>
  )
}

export default Input