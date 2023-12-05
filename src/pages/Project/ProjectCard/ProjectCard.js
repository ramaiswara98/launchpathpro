import React, { useState } from 'react'

import './ProjectCard.css'
import IconChecklist from '../../../assets/icon/checklist.png';
import IconArrowRight from '../../../assets/icon/arrow-right.png';
import Button from '../../../component/Button/Button';

function ProjectCard() {
    const [state, setState] = useState(null);

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
        <p className='project-card-title-text'>Project Title</p>
        <div className='project-card-second-row'>
            <p className='project-card-title-text'>1 Of 4 Completion</p>
            <div className='project-card-indicator-list'>
                <span className='project-card-indicator-item'></span>
                <span className='project-card-indicator-item'></span>
                <span className='project-card-indicator-item'></span>
                <span className='project-card-indicator-item'></span>
            </div>
        </div>
        <div className='section-card' onClick={()=>handleOpenSectionCard(0)}>
            <div className='section-card-first-row'>
                <div className='section-card-icon-text'>
                    <img src={IconChecklist} alt='icon-checklist' className='section-card-icon'/>
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
                    <img src={IconChecklist} alt='icon-checklist' className='section-card-icon'/>
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
                    <img src={IconChecklist} alt='icon-checklist' className='section-card-icon'/>
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
                    <img src={IconChecklist} alt='icon-checklist' className='section-card-icon'/>
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