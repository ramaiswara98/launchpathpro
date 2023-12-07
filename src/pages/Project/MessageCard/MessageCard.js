import React, { useEffect, useState } from 'react'

import './MessageCard.css';
import NewBabyBorn from '../../../assets/images/baby-born.png'
import BabyCrawl from '../../../assets/images/baby-crawl.png'
import BabyStand from '../../../assets/images/baby-stand.png'
import BabyWalk from '../../../assets/images/baby-walk.png'
import IconClose from '../../../assets/icon/close.png'
import { Constant } from '../../../utils/Constant';

function MessageCard({project}) {

  const [completionSum, setCompletionSum] = useState(0);

  useEffect(() => {
    getCompletionSum();
    // eslint-disable-next-line
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
    <div className='message-card-container'>
        <div className='close-button-container'>
            <img src={IconClose} alt='icon-close' className='icon-close'/>
        </div>
        <div className='image-baby-container'>
          {completionSum === 1 && (
            <img src={NewBabyBorn} alt='new-baby-born' className='image-baby'/>
          )}
          {completionSum === 2 && (
            <img src={BabyCrawl} alt='new-baby-born' className='image-baby'/>
          )}
          {completionSum === 3 && (
            <img src={BabyStand} alt='new-baby-born' className='image-baby'/>
          )}
          {completionSum === 4 && (
            <img src={BabyWalk} alt='new-baby-born' className='image-baby'/>
          )}
        </div>
        <div>
        {completionSum === 1 && (
            <p className='message-text'>{Constant.newBorn}</p>
          )}
          {completionSum === 2 && (
           <p className='message-text'>{Constant.crawlBaby}</p>
          )}
          {completionSum === 3 && (
            <p className='message-text'>{Constant.standBaby}</p>
          )}
          {completionSum === 4 && (
            <p className='message-text'>{Constant.walkingBaby}</p>
          )}
        </div>
    </div>
  )
}

export default MessageCard