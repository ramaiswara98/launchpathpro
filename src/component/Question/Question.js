import React from 'react'

import './Question.css'
import Button from '../Button/Button'

function Question({type}) {
  return (
    <div className='question-component'>
        <div className='question-label-container'>
            <p className='question-label'>
            Who is the specific target audience for your product/service?
            </p>
        </div>
        {type === 'text'&&(
            <div className='question-text'>
                <input className='input'/>
            </div>
        )}

        {type === 'text-area' && (
            <div className='question-text-area'>
                <textarea className='input' rows={8}/>
            </div>
        )}

        {type === 'multiple-choice' && (
            <div className='question-multiple-choice'>
                <div className='multiple-choice-item'>
                    <div className='multiple-choice-circle'>
                        <div className='multiple-choice-circle-inside'>

                        </div>
                    </div>
                    <p className='multiple-choice-text'>Small and Stagnant</p>
                </div>
                <div className='multiple-choice-item'>
                    <div className='multiple-choice-circle'>
                        <div className='multiple-choice-circle-inside'>

                        </div>
                    </div>
                    <p className='multiple-choice-text'>Small and Stagnant</p>
                </div>
                <div className='multiple-choice-item'>
                    <div className='multiple-choice-circle'>
                        <div className='multiple-choice-circle-inside'>

                        </div>
                    </div>
                    <p className='multiple-choice-text'>Small and Stagnant</p>
                </div>
                <div className='multiple-choice-item'>
                    <div className='multiple-choice-circle'>
                        <div className='multiple-choice-circle-inside'>

                        </div>
                    </div>
                    <p className='multiple-choice-text'>Small and Stagnant</p>
                </div>
                <div className='multiple-choice-item'>
                    <div className='multiple-choice-circle'>
                        <div className='multiple-choice-circle-inside'>

                        </div>
                    </div>
                    <p className='multiple-choice-text'>Small and Stagnant</p>
                </div>
            
            </div>
        )}
        
        

        
        <div className='question-button-container'>
            <Button
                type={'primary'}
                text={'Next'}
            />
        </div>
    </div>
  )
}

export default Question