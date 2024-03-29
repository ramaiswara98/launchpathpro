import React, { useState } from 'react'

import './Question.css'
import Button from '../Button/Button'

function Question({type,question, onClick, value, onChange,alerts,submitState}) {
    const [selected,setSelected] = useState();
  return (
    <div className='question-component'>
        <div className='question-label-container'>
            <p className='question-label'>
            {question.question}
            </p>
        </div>
        {type === 'text'&&(
            <div className='question-text'>
                <input className='input'/>
            </div>
        )}

        {type === 'text-area' && (
            <div className='question-text-area'>
                <textarea className='input' rows={8} value={value} onChange={(e)=>{onChange(e.target.value)}}/>
                {alerts}
            </div>
        )}

        {type === 'multiple-choice' && (
            <div className='question-multiple-choice'>
                {/* {console.log(question)} */}
                {question.options.map((options,index)=> {
                    return(
                        <div className='multiple-choice-item' key={index} onClick={()=>{setSelected(index);onChange(options.text)}}>
                            <div className='multiple-choice-circle'>
                                {index===selected&&(
                                     <div className='multiple-choice-circle-inside'>

                                     </div>
                                )}
                               
                            </div>
                            <p className='multiple-choice-text'>{options.text}</p>
                        </div>
                    )
                })}
            </div>
        )}
        
        

        
        <div className='question-button-container'>
            <Button
                type={submitState?'disable':'primary'}
                text={submitState?'Submitting...':'Next'}
                onClick={submitState?()=>{}:()=>{onClick();setSelected('')}}
            />
        </div>
    </div>
  )
}

export default Question