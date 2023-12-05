import React, { useState } from 'react'

import './Button.css'

function Button(props) {
  const [color,setColor] = useState('var(--pure-white)')

  const checkButtonType = (type) => {
    if(type){
      if(type === 'primary'){
        return 'var(--green)'
      }
      if(type === 'secondary'){
        return 'var(--dark-blue)'
      }
      if(type === 'alternate'){
        return 'var(--gray)'
      }
    }else{
      return 'var(--green)'
    }
  }
  const checkButtonColor = (type) => {
    if(type){
      if(type === 'primary'){
        return 'var(--pure-white)'
      }
      if(type === 'secondary'){
        return 'var(--pure-white)'
      }
      if(type === 'alternate'){
        return 'var(--dark-blue)'
      }
    }else{
      return 'var(--pure-white)'
    }
  }
  return (
    <div 
      className='button-container' 
      style={{backgroundColor:checkButtonType(props.type)}}
      onClick={props.onClick}
    >
        <p className='button-text' style={{color:checkButtonColor(props.type)}}>{props.text}</p>
    </div>
  )
}

export default Button