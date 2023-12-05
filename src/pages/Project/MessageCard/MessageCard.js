import React from 'react'

import './MessageCard.css';
import NewBabyBorn from '../../../assets/images/baby-born.png'
import IconClose from '../../../assets/icon/close.png'

function MessageCard() {
  return (
    <div className='message-card-container'>
        <div className='close-button-container'>
            <img src={IconClose} alt='icon-close' className='icon-close'/>
        </div>
        <div className='image-baby-container'>
            <img src={NewBabyBorn} alt='new-baby-born' className='image-baby'/>
        </div>
        <div>
            <p className='message-text'>Congratulation your baby just born, now let ‘s continue the journey to help him grow</p>
        </div>
    </div>
  )
}

export default MessageCard