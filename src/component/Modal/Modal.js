import React from 'react'

import './Modal.css'

function Modal({children, show, onClose}) {
  return (
    <div
        className='modal'
        style={{display:show?'flex':'none'}}
    >
        <div
            className='modal-content'
        >
            {children}
        </div>
    </div>
  )
}

export default Modal