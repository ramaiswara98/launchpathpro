import React, { useEffect, useState } from 'react'

import './ProjectCard.css'
import IconChecklist from '../../../assets/icon/checklist.png';
import IconArrowRight from '../../../assets/icon/arrow-right.png';
import Button from '../../../component/Button/Button';

function ProjectCard({project} ) {
    const [state, setState] = useState(null);
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

    const handleOpenSectionCard = (index) => {
        const currentState = state;
        if(currentState === index){
            setState(null)
        }else{
            setState(index)
        }
    }
  return (
    <div className='project-card-container'>
        <p className='project-card-title-text'>{project?project.ideaGeneration[0].answer:'loading'}</p>
        <div className='project-card-second-row'>
            <p className='project-card-title-text'>{completionSum} Of 4 Completion</p>
            <div className='project-card-indicator-list'>
                <span className={completionSum>0?'project-card-indicator-item active':'project-card-indicator-item'}></span>
                <span className={completionSum>1?'project-card-indicator-item active':'project-card-indicator-item'}></span>
                <span className={completionSum>2?'project-card-indicator-item active':'project-card-indicator-item'}></span>
                <span className={completionSum>3?'project-card-indicator-item active':'project-card-indicator-item'}></span>
            </div>
        </div>
        <div className='section-card' onClick={()=>handleOpenSectionCard(0)}>
            <div className='section-card-first-row'>
                <div className='section-card-icon-text'>
                    <img src={IconChecklist} alt='icon-checklist' className='section-card-icon' style={{display:completionSum>0?'flex':'none'}}/>
                    <p className='project-card-title-text'>Idea Generation</p>
                </div>
                <img src={IconArrowRight} alt='icon-arrow-right' className={state===0?'section-card-icon-arrow active':'section-card-icon-arrow'} onClick={()=>handleOpenSectionCard(0)}/>
            </div>
            {state === 0 && 
                <>
                <div className='section-card-second-row'>
                    <p className='reguler-text' style={{color:'#000000'}}>Describing your idea as a consept</p>
                </div>
                <div>
                    <Button
                    type={'primary'}
                    text={'See Summary'}
                    />
                </div>
                </>
            }
            
        </div>
        <div className='section-card' onClick={()=>handleOpenSectionCard(1)}>
            <div className='section-card-first-row'>
                <div className='section-card-icon-text'>
                    <img src={IconChecklist} alt='icon-checklist' className='section-card-icon' style={{display:completionSum>1?'flex':'none'}}/>
                    <p className='project-card-title-text'>Idea Validation</p>
                </div>
                <img src={IconArrowRight} alt='icon-arrow-right' className={state===1?'section-card-icon-arrow active':'section-card-icon-arrow'} onClick={()=>handleOpenSectionCard(1)}/>
            </div>
            {state === 1 && 
                <>
                <div className='section-card-second-row'>
                    <p className='reguler-text' style={{color:'#000000'}}>Describing your idea as a consept</p>
                </div>
                <div>
                    <Button
                    type={'primary'}
                    text={'See Summary'}
                    />
                </div>
                </>
            }
        </div>
        <div className='section-card' onClick={()=>handleOpenSectionCard(2)}>
            <div className='section-card-first-row'>
                <div className='section-card-icon-text'>
                    <img src={IconChecklist} alt='icon-checklist' className='section-card-icon' style={{display:completionSum>2?'flex':'none'}}/>
                    <p className='project-card-title-text'>Market Research</p>
                </div>
                <img src={IconArrowRight} alt='icon-arrow-right' className={state===2?'section-card-icon-arrow active':'section-card-icon-arrow'} onClick={()=>handleOpenSectionCard(2)}/>
            </div>
            {state === 2 && 
                <>
                <div className='section-card-second-row'>
                    <p className='reguler-text' style={{color:'#000000'}}>Describing your idea as a consept</p>
                </div>
                <div>
                    <Button
                    type={'primary'}
                    text={'See Summary'}
                    />
                </div>
                </>
            }
        </div>
        <div className='section-card' onClick={()=>handleOpenSectionCard(3)}>
            <div className='section-card-first-row'>
                <div className='section-card-icon-text'>
                    <img src={IconChecklist} alt='icon-checklist' className='section-card-icon' style={{display:completionSum>3?'flex':'none'}}/>
                    <p className='project-card-title-text'>Business Plan</p>
                </div>
                <img src={IconArrowRight} alt='icon-arrow-right' className={state===3?'section-card-icon-arrow active':'section-card-icon-arrow'} onClick={()=>handleOpenSectionCard(3)}/>
            </div>
            {state === 3 && 
                <>
                <div className='section-card-second-row'>
                    <p className='reguler-text' style={{color:'#000000'}}>Describing your idea as a consept</p>
                </div>
                <div>
                    <Button
                    type={'primary'}
                    text={'See Summary'}
                    />
                </div>
                </>
            }
        </div>
    </div>
  )
}

export default ProjectCard