import React from 'react'

import './AICard.css'
import Button from '../../../component/Button/Button'
import BabyMike from '../../../assets/images/baby-mike.png'

function AICard({projectId}) {
  return (
    <div className='ai-card-container'>
      <div className='ai-card-image-container'>
        <img src={BabyMike} alt='icon-baby-mike' className='ai-card-picture'/>
      </div>
      <div className='ai-card-text-contaier'>
        <p className='ai-card-title-text'> Discover Mike, Your Personal AI Business Expert !</p>
        <p className='subtitle-text'>Introducing Mike, Your AI Business Guru: Tailored Opinions, SWOT Analyses, Market Insights, Audience Profiling, Competitor Evaluation - All in One Place!"</p>
        <Button text={'Get Mike Opinion!'} onClick = {() => { window.location.href = '/agent-mike/'+projectId}}/>
      </div>
    </div>
  )
}

export default AICard