import React from 'react'

import'./Alert.css'
import Button from "../../../component/Button/Button";
import IconClose from '../../../assets/icon/close.png'
import Modal from '../Modal';
function Alert({show, closeButton, primaryButton, secondaryButton,text}) {
  return (
    <Modal
        show={show}
    >
        <div className='alert-container'>
          <div className='alert-close-button-container'>
            <img src={IconClose} alt="icon-close" className='alert-close-button' onClick={()=>{closeButton()}}/>
          </div>
          <p className='alert-text'>{text}</p>
          <div className='alert-button-container'>
            <Button
              text={primaryButton.text}
              onClick={primaryButton.handle}
              type={'primary'}
            />
            <div className='alert-spacer'></div>
            <Button
              text={secondaryButton.text}
              onClick={secondaryButton.handle}
              type={'secondary'}
            />
          </div>
        </div>
    </Modal>
  )
}

export default Alert