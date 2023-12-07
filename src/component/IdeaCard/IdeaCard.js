import React, { useEffect, useState } from 'react'

import './IdeaCard.css'
import IconPlus from '../../assets/icon/plus-circle.png'
import IconLightBulb from '../../assets/icon/light-bulb.png'

function IdeaCard({start, onClickStart,project, onClickIdeaCard}) {
    const [completionSum, setCompletionSum] = useState(0);

    useEffect(() => {
        getCompletionSum();
    },[])
    const getCompletionSum = ()=> {
        let sum = 0;
        if(project !== undefined){
            if(project.ideaGeneration !== undefined){
                sum=(sum+1)
                setCompletionSum(sum)
            }
            if(project.ideaValidation !== undefined){
                sum=sum+1
                setCompletionSum(sum)
            }
            if(project.marketResearch !== undefined){
                sum=sum+1
                setCompletionSum(sum)
            }
            if(project.businessPlan !== undefined){
                sum=sum+1
                setCompletionSum(sum)
            }
        }
        
    }
  return (
    <div className='idea-card-main'>
        {start?(
            <div className='idea-card-create-container' onClick={onClickStart}>
             <img src={IconPlus} alt='icon-plus' className='icon-32'/>
             <p className='idea-card-title'>Create Business</p>
            </div>
        ):(
            <div className='idea-card-container' onClick={onClickIdeaCard}>
            <div className='idea-card-three-rows'>
                <div className='idea-card-first-row'>
                    <div className='idea-card-icon-container'>
                        <img src={IconLightBulb} alt='icon-light-bulb' className='icon-32'/>
                    </div>
                    <div className='idea-card-right-side'>
                        <p className='idea-card-title'>{project.ideaGeneration[0].answer}</p>
                        <div className='idea-card-indicator'>
                            <span className={completionSum>0?'indicator-item active':'indicator-item'}></span>
                            <span className={completionSum>1?'indicator-item active':'indicator-item'}></span>
                            <span className={completionSum>2?'indicator-item active':'indicator-item'}></span>
                            <span className={completionSum>3?'indicator-item active':'indicator-item'}></span>
                        </div>
                        <p className='idea-card-indicator-text'>{completionSum} of 4 Completion</p>
                    </div>
                </div>
                <div className='idea-card-second-row'>

                </div>
                <div className='idea-card-third-row'>
                    <div className={completionSum>3?'idea-card-circle active':'idea-card-circle'}>

                    </div>
                    <p className='idea-card-indicator-text'>{completionSum>3?'Ready To Launch':'Pending'}</p>
                </div>
            </div>
        </div>

        )}
       
        
    </div>
  )
}

export default IdeaCard