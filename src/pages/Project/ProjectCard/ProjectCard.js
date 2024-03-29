import React, { useEffect, useState } from 'react'

import './ProjectCard.css'
import IconChecklist from '../../../assets/icon/checklist.png';
import IconArrowRight from '../../../assets/icon/arrow-right.png';
import Button from '../../../component/Button/Button';
import { Constant } from '../../../utils/Constant';
import { checkUserPlan } from '../../../utils/Subscribe';
import useFirebaseAuth from '../../../hook/useFirebaseAuth';

function ProjectCard({project,projectId} ) {
    const [state, setState] = useState(null);
    const [completionSum, setCompletionSum] = useState(0);
    const {user, type, userFireStore} = useFirebaseAuth();

    useEffect(() => {
        getCompletionSum();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const handleBusinessPlanClicked = async() => {
        const currentPlan = userFireStore.plan;
        const expireDate = userFireStore?.plan_expire_date?userFireStore.plan_expire_date:null;
        const plan = await checkUserPlan(currentPlan, expireDate);
        if(plan === 0){
            alert("Your current plan not include this feature")
        }else if(plan === null){
            alert("Your previous plan has been expired, please renew it to access all the feature")
        }
        else{
            window.location.href='/quiz/'+projectId+'/businessPlan'
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
                    onClick={()=>{window.location.href='/summary/'+projectId+'/ea8423a2'}}
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
                    <p className='reguler-text' style={{color:'#000000'}}>{Constant.descIdeaValidation}</p>
                </div>
                {completionSum>1?(<>
                    <div>
                        <Button
                        type={'primary'}
                        text={'See Summary'}
                        onClick={()=>{window.location.href='/summary/'+projectId+'/fff72284'}}
                        />
                    </div>
                </>):(<>
                    <div>
                        <Button
                        type={'primary'}
                        text={'Validate Idea'}
                        onClick={()=>{window.location.href='/quiz/'+projectId+'/ideaValidation'}}
                        />
                    </div>
                </>)}
                
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
                    <p className='reguler-text' style={{color:'#000000'}}>{Constant.descMarketResearch}</p>
                </div>
                {completionSum>2?(<>
                    <div>
                        <Button
                        type={'primary'}
                        text={'See Summary'}
                        onClick={()=>{window.location.href='/summary/'+projectId+'/aff35e0'}}
                        />
                    </div>
                </>):(<>
                {completionSum<2?(<>
                    <div>
                        <Button
                        type={'disable'}
                        text={'Research Market'}
                        />
                    </div>
                </>):(<>
                    <div>
                        <Button
                        type={'primary'}
                        text={'Research Market'}
                        onClick={()=>{window.location.href='/quiz/'+projectId+'/marketResearch'}}
                        />
                    </div>
                </>)}
                   
                </>)}
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
                    <p className='reguler-text' style={{color:'#000000'}}>{Constant.descBusinessPlan}</p>
                </div>
                {completionSum>3?(<>
                    <div>
                        <Button
                        type={'primary'}
                        text={'See Summary'}
                        onClick={()=>{window.location.href='/summary/'+projectId+'/a486c9c1'}}
                        />
                    </div>
                </>):(<>
                    {completionSum<3?(<>
                    <div>
                        <Button
                        type={'disable'}
                        text={'Start Planning'}
                        />
                    </div>
                </>):(<>
                    <div>
                        <Button
                        type={'primary'}
                        text={'Start Planning'}
                        onClick={()=>{handleBusinessPlanClicked()}}
                        />
                    </div>
                </>)}
                </>)}
                </>
            }
        </div>
    </div>
  )
}

export default ProjectCard