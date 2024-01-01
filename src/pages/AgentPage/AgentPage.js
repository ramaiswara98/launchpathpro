import React, { useEffect, useState } from 'react'

import './AgentPage.css'
import Navbar from '../../component/NavBar/Navbar'
import BabyMike from '../../assets/images/baby-mike.png'
import { useParams } from 'react-router-dom'
import { getProjectById } from '../../services/Firebase/FireStore/Project'
import useFirebaseAuth from '../../hook/useFirebaseAuth'
import { checkUserPlan } from '../../utils/Subscribe'
import Loading from '../../component/Loading/Loading'

function AgentPage() {
    const {projectId} = useParams();
    const [project, setProject] = useState(null);
    const {user, type, userFireStore} = useFirebaseAuth();
    const freeList = ["opinion"];
    const dreamerList = ["opinion","swot","potentialMarket"];
    const founderList = ["opinion","swot", "potentialMarket", "targetAudience","userPersona","competitor"]
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getProject();
    },[])

    const getProject = () => {
        getProjectById(projectId).then((result) => {
            setProject(result);
        }).catch((err) => {
            setProject(null)
        })
    }

    const generateAdvice = async(advice) => {
        const currentPlan = userFireStore.plan;
        const expireDate = userFireStore?.plan_expire_date?userFireStore.plan_expire_date:null;
        console.log(expireDate)
        const plan = await checkUserPlan(currentPlan, expireDate);
        console.log(plan);
        console.log(expireDate);
        if(plan === 0){
            if(freeList.includes(advice)){
                window.location.href = `/generate/${advice}/${projectId}`
            }else{
                alert("Your current plan is not include this feature")
            }
        }
        if(plan === null){
            if(freeList.includes(advice)){
                window.location.href = `/generate/${advice}/${projectId}`
            }else{
                alert("Your previous plan has been expired, please renew it to access all the feature")
            }
        }

        if(plan === 1){
            if(dreamerList.includes(advice)){
                window.location.href = `/generate/${advice}/${projectId}`
            }else{
                alert("Your current plan is not include this feature")
            }
        }

        if(plan === 2){
            if(founderList.includes(advice)){
                window.location.href = `/generate/${advice}/${projectId}`
            }else{
                alert("Your current plan is not include this feature")
            }
        }


        
    }

  return (
    <div className='main-agent-page'>
        <Navbar/>
        {userFireStore !== null? (
            <>
            <div className='agent-page-container'>
        <p className='agent-page-title'>Let's Tailor Your <span className='agent-page-business-name'>Success!</span><br/> How Can I Assist You Today to Empower <span className='agent-page-business-name'>{project?.ideaGeneration[0].answer?project?.ideaGeneration[0].answer:'Your Idea'}</span></p>
        </div>
        <div className='agent-page-container'>
            
            <div className='agent-page-card-container'>
                <div className='agent-page-agent-container' >
                    <img src={BabyMike} alt='baby-mike' className='agent-page-baby-mike'/>
                    <div className='agent-page-text-container' onClick={()=>{generateAdvice('opinion')}}>
                        <p className='agent-page-text'>Opinion & Recommendation</p>
                    </div>
                </div>
                <div className='agent-page-agent-container'>
                    <img src={BabyMike} alt='baby-mike' className='agent-page-baby-mike'/>
                    <div className='agent-page-text-container' onClick={()=>{generateAdvice('swot')}}>
                        <p className='agent-page-text'>SWOT Analysis</p>
                    </div>
                </div>
                <div className='agent-page-agent-container'>
                    <img src={BabyMike} alt='baby-mike' className='agent-page-baby-mike'/>
                    <div className='agent-page-text-container' onClick={()=>{generateAdvice('potentialMarket')}}>
                        <p className='agent-page-text'>Potential Market</p>
                    </div>
                </div>
                <div className='agent-page-agent-container'>
                    <img src={BabyMike} alt='baby-mike' className='agent-page-baby-mike'/>
                    <div className='agent-page-text-container' onClick={()=>{generateAdvice('targetAudience')}}>
                        <p className='agent-page-text'>Target Audience</p>
                    </div>
                </div>
                <div className='agent-page-agent-container'>
                    <img src={BabyMike} alt='baby-mike' className='agent-page-baby-mike'/>
                    <div className='agent-page-text-container' onClick={()=>{generateAdvice('userPersona')}}>
                        <p className='agent-page-text'>User Persona</p>
                    </div>
                </div>
                <div className='agent-page-agent-container'>
                    <img src={BabyMike} alt='baby-mike' className='agent-page-baby-mike'/>
                    <div className='agent-page-text-container' onClick={()=>{generateAdvice('competitor')}}>
                        <p className='agent-page-text'>Potential Competitor</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        ):(
            <>
            <Loading/>
            </>
        )}
        
    </div>
  )
}

export default AgentPage