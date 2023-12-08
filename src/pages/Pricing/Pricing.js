import React from 'react'

import './Pricing.css'
import Navbar from '../../component/NavBar/Navbar'
import PricingCard from './PricingCard/PricingCard'

function Pricing() {
  return (
    <div className='pricing-main'>
        <Navbar/>
        <div className='pricing-main-container'>
        <div className='pricing-container'>
            <div className='pricing-title-container'>
                <p className='pricing-title-page'>Pricing</p>
            </div>
            <div className='pricing-pricing-card-container'>
                <PricingCard
                    title={"Free"}
                    price={'$0'}
                    duration={'Forever'}
                    project={'1+1 After Submit Feedback'}
                    download={false}
                    newFeature={false}
                    retake={false}
                    buy={false}
                />
                <PricingCard
                    title={"Pro"}
                    price={'$6'}
                    duration={'per Month'}
                    project={'Unlimited'}
                    download={true}
                    newFeature={true}
                    retake={true}
                    buy={true}
                />
                <PricingCard
                    title={"Visionary"}
                    price={'$50'}
                    duration={'per Year'}
                    project={'Unlimited'}
                    download={true}
                    newFeature={true}
                    retake={true}
                    buy={true}
                />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Pricing