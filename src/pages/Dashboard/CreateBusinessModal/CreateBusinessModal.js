import React, { useState } from 'react'

import Button from '../../../component/Button/Button'
import Input from '../../../component/Input/Input'
import './CreateBusinessModal.css'

function CreateBusinessModal({toggle, setBusinessName, setBusinessIdea, businessName, businessIdea}) {
    const [state,setState] = useState(0);

    const handleNextClick = () => {
        const currentState = state;
        if(currentState === 0){
            setState(1);
        }
    }

    const handleCancelClick = () => {
        setState(0);
        setBusinessName('');
        setBusinessIdea('');
        toggle();
    }
  return (
    <div className='create-business-main'>
        <p className='create-business-title'>Create a Business</p>
    
    <div className='create-business-content'>
    <div className='create-business-input-container'>
    {state === 0 ? (
        <Input
        label={'Business Name'}
        type={'text'}
        placeholder={'Business Name'}
        width={'400px'}
        onChange={setBusinessName}
        value={businessName}
        maxLength={21}
    />
    ):(
        <Input
        label={'Business Idea'}
        type={'text-area'}
        placeholder={'Business Idea'}
        width={'400px'}
        rows={6}
        onChange={setBusinessIdea}
        value={businessIdea}
        />
    )}
    
   
    </div>
    
    <div className='create-business-button-container'>
    <Button
        type={'alternate'}
        text={'Cancel'}
        onClick={handleCancelClick}
    />
    <div className='create-business-space'>

    </div>
    <Button
        type={'primary'}
        text={state===0?'Next':'Create Business'}
        onClick={handleNextClick}
    />

    </div>
    
   </div>
   </div>
  )
}

export default CreateBusinessModal