import React, { useEffect, useState } from 'react'

import './Generate.css'
import BabyMike from '../../assets/images/baby-mike.png'
import Navbar from '../../component/NavBar/Navbar'
import Button from '../../component/Button/Button'
import { useParams } from 'react-router-dom'
import { getProjectById, updateProject } from '../../services/Firebase/FireStore/Project'
import { generateAIOpinion } from '../../services/OpenAI/GenerateAPI'
import Markdown from 'react-markdown'
import { Prompt } from '../../utils/Prompt'
import useFirebaseAuth from '../../hook/useFirebaseAuth'

function Generate() {
  const {projectId, advice} = useParams();
  const [project, setProject] = useState(null);
  const [output, setOutput] = useState(null);
  const [isPrint, setIsPrint] = useState(false);
  const [alertText, setAlertText] = useState("");
  const {user, type, userFireStore} = useFirebaseAuth();

  useEffect(() => {
    getProject();
    function handleAfterPrint() {
      setIsPrint(false);
      console.log('Print dialog closed or print completed.');
      // Your logic when the print dialog is closed or print completed
    }
    window.addEventListener('afterprint', handleAfterPrint);
    
    function handleKeyDown(event){
      if (event.ctrlKey && (event.key === 'p' || event.key === 'P')) {
          event.preventDefault();
          // Optionally, show a message to the user that printing is disabled
      }
      if ((event.metaKey || event.ctrlKey) && (event.key === 'p' || event.key === 'P')) {
        event.preventDefault();
        // Optionally, show a message to the user that printing is disabled
      }
    };
    window.addEventListener('keydown', handleKeyDown);

  

    return () => {
      window.removeEventListener('afterprint', handleAfterPrint);
      window.removeEventListener('keydown', handleKeyDown);
    };
  },[])

  const getProject = () => {
    getProjectById(projectId).then((result) => {
      setProject(result);
      if(result[advice]){
        setOutput(result[advice])
        settingAlert();
      }else{
        generateNow(result);
      }
    }).catch((err) => {
      setProject(null);
    })
  }

  const settingAlert = () => {
    if(advice === 'opinion'){
      setAlertText("Here is My Opinion And Recommendation")
    }
    if(advice === 'swot'){
      setAlertText("Here is My SWOT Analysis")
    }
    if(advice === 'potentialMarket'){
      setAlertText("Here is The Potential Market  For Your Idea")
    }
    if(advice === 'targetAudience'){
      setAlertText("Here is The Potential Target Audience For Your Idea")
    }
    if(advice === 'userPersona'){
      setAlertText("Here is User Persona For Your Idea")
    }
    if(advice === 'competitor'){
      setAlertText("Here is The Potential Competitor For Your Idea")
    }
  }

  const generateNow = (result) => {
    if(advice === 'opinion'){
      setAlertText("Here is My Opinion And Recommendation")
      generateOpinion(result);
    }
    if(advice === 'swot'){
      setAlertText("Here is My SWOT Analysis")
      generateSWOT(result);
    }
    if(advice === 'potentialMarket'){
      setAlertText("Here is The Potential Market  For Your Idea")
      generatePotentialMarket(result);
    }
    if(advice === 'targetAudience'){
      setAlertText("Here is The Potential Target Audience For Your Idea")
      generateTargetAudience(result);
    }
    if(advice === 'userPersona'){
      setAlertText("Here is User Persona For Your Idea")
      generateUserPersona(result);
    }
    if(advice === 'competitor'){
      setAlertText("Here is The Potential Competitor For Your Idea")
      generateCompetitor(result);
    }
  }

  const generateOpinion = (result) => {
    const data = {
      businessName:result.ideaGeneration[0].answer,
      businessIdea:result.ideaGeneration[1].answer,
      prompt:Prompt.OPINION
    }
    generateAIOpinion(data).then((opinion) => {
      setOutput(opinion);
      const updatedData = {};
      updatedData[advice] = opinion;
      updateProject(updatedData,projectId);
    }).catch((err) => {
      setOutput(err)
    })
  }

  const generateSWOT = (result) => {
    const data = {
      businessName:result.ideaGeneration[0].answer,
      businessIdea:result.ideaGeneration[1].answer,
      prompt:Prompt.SWOT
    }
    generateAIOpinion(data).then((swot) => {
      setOutput(swot);
      const updatedData = {};
      updatedData[advice] = swot;
      updateProject(updatedData,projectId);
    }).catch((err) => {
      setOutput(err)
    })
  }

  const generatePotentialMarket = (result) =>{
    const data = {
      businessName:result.ideaGeneration[0].answer,
      businessIdea:result.ideaGeneration[1].answer,
      prompt:Prompt.POTENTIALMARKET
    }
    generateAIOpinion(data).then((potentialMarket) => {
      setOutput(potentialMarket);
      const updatedData = {};
      updatedData[advice] = potentialMarket;
      updateProject(updatedData,projectId);
    }).catch((err) => {
      setOutput(err)
    })
  }

  const generateTargetAudience = (result) =>{
    const data = {
      businessName:result.ideaGeneration[0].answer,
      businessIdea:result.ideaGeneration[1].answer,
      prompt:Prompt.TARGETAUDIENCE
    }
    generateAIOpinion(data).then((targetAudience) => {
      setOutput(targetAudience);
      const updatedData = {};
      updatedData[advice] = targetAudience;
      updateProject(updatedData,projectId);
    }).catch((err) => {
      setOutput(err)
    })
  }

  const generateUserPersona = (result) =>{
    const data = {
      businessName:result.ideaGeneration[0].answer,
      businessIdea:result.ideaGeneration[1].answer,
      prompt:Prompt.USERPERSONA
    }
    generateAIOpinion(data).then((userPersona) => {
      setOutput(userPersona);
      const updatedData = {};
      updatedData[advice] = userPersona;
      updateProject(updatedData,projectId);
    }).catch((err) => {
      setOutput(err)
    })
  }

  const generateCompetitor = (result) =>{
    const data = {
      businessName:result.ideaGeneration[0].answer,
      businessIdea:result.ideaGeneration[1].answer,
      prompt:Prompt.COMPETITOR
    }
    generateAIOpinion(data).then((competitor) => {
      setOutput(competitor);
      const updatedData = {};
      updatedData[advice] = competitor;
      updateProject(updatedData,projectId);
    }).catch((err) => {
      setOutput(err)
    })
  }

  const handleDownloadClick = async() => {
    if(userFireStore.type === "free"){
      alert("You current plan is not include this feature")
    }else{
      await setIsPrint(true)
      window.print()
    }
  }

  const handleRegenerate = () => {
    if(userFireStore.type === "free"){
      alert("You current plan is not include this feature")
    }else{
      setOutput(null);
      setAlertText("");
      generateNow(project);
    }
    
  }


  return (
    <div
        className='main-generate'
    > 
    {isPrint?'':(<Navbar/>)}
        
        <div className='generate-container'>
            <p className='generate-title'>{project?.ideaGeneration[0].answer?project.ideaGeneration[0].answer:'...'}</p>
            <div className='generate-line'></div>
            <img src={BabyMike} alt='baby-mike' className='generate-baby-mike'/>
            <p className='generate-alert-text'>{output !== null?alertText:"Please wait, Mike currently studying your idea"}</p>
            <p className='generate-result' id='md'>
              {output !== null ? <Markdown children={output}/>:"..."}
            </p>
            {isPrint?'':(
               <div className='generate-button-container'>
               <Button text={'Download'} onClick={()=> {handleDownloadClick()}}/>
               <Button text={'Regenerate'} type={'secondary'} onClick={()=>{handleRegenerate()}}/>
           </div>
            )}
           
        </div>    
    </div>
  )
}

export default Generate