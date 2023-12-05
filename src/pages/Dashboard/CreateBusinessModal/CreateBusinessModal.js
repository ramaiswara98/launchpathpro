import React, { useState } from 'react'

import Button from '../../../component/Button/Button'
import Input from '../../../component/Input/Input'
import './CreateBusinessModal.css'

function CreateBusinessModal({toggle, setBusinessName, setBusinessIdea, businessName, businessIdea, handleStore}) {
    const [state,setState] = useState(0);
    const [alert, setAlert] = useState('');

    const handleNextClick = () => {
        const currentState = state;
        if(currentState === 0){
            if(businessName !== ''){
                if(businessName.length < 3){
                    setAlert(<p className='business-modal-alert'>Business Name must be more than 3 character</p>)
                }else{
                    setAlert('')
                    setState(1);
                }
                
            }else{
                setAlert(<p className='business-modal-alert'>Business Name cannot be empty</p>)
            }
            
        }
        if(currentState === 1){
            if(businessIdea !== ''){
                if(businessIdea.length < 100){
                    setAlert(<p className='business-modal-alert'>Business Idea must be more than 100 character</p>)
                }else{
                    setAlert('')
                    handleStore();
                }
            }else{
                setAlert(<p className='business-modal-alert'>Business Idea cannot be empty</p>)
            }
            
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
    {alert}
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