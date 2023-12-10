import React from 'react'

import './PricingCard.css'
import CheckList from '../../../assets/icon/checklist.png'
import Close from '../../../assets/icon/close.png'
import Button from '../../../component/Button/Button'

function PricingCard({price, title, duration, project, retake, download,newFeature,buy, buyHandle}) {
  return (
    <div className='pricing-card'>
        <div className='pricing-card-title-container'>
            <p className='pricing-card-title-text'>{title}</p>
        </div>
        <div className='pricing-card-content-container'>
            <div className='pricing-card-content-price-container'>
                <p className='pricing-card-content-price'>{price}</p>
                <p className='pricing-card-content-duration'>{duration}</p>
            </div>
            <div className='pricing-card-content-project-container'>
                <p className='pricing-card-content-title'>Project</p>
                <p className='pricing-card-content-sub-title'>{project}</p>
            </div>
            <div className='pricing-card-content-project-container'>
                <p className='pricing-card-content-title'>Retake</p>
                {retake?(
                    <img src={CheckList} alt='icon-checklir' className='pricing-card-icon'/>
                ):(
                    <img src={Close} alt='icon-checklir' className='pricing-card-icon'/>
                )}
                
                
            </div>
            <div className='pricing-card-content-project-container'>
                <p className='pricing-card-content-title'>Download as PDF</p>
                {download?(
                    <img src={CheckList} alt='icon-checklir' className='pricing-card-icon'/>
                ):(
                    <img src={Close} alt='icon-checklir' className='pricing-card-icon'/>
                )}
            </div>
            <div className='pricing-card-content-project-container'>
                <p className='pricing-card-content-title'>New Feature</p>
                {newFeature?(
                    <img src={CheckList} alt='icon-checklir' className='pricing-card-icon'/>
                ):(
                    <img src={Close} alt='icon-checklir' className='pricing-card-icon'/>
                )}
            </div>
        </div>
        <div className='pricing-card-button-container'>
            {buy&&(
                <Button
                type={'primary'}
                text={'Buy'}
                width={200}
                onClick={buyHandle}

            />
            )}
            
        </div>
    </div>
  )
}

export default PricingCard