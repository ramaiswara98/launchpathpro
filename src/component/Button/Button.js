import React from 'react'

import './Button.css'

function Button(props) {

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
  return (
    <div className='button-container' style={{backgroundColor:checkButtonType(props.type)}}>
        <p className='button-text'>{props.text}</p>
    </div>
  )
}

export default Button