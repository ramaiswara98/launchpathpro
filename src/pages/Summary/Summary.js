import React from 'react'

import './Summary.css'
import Navbar from '../../component/NavBar/Navbar'
import SummaryCard from './SummaryCard/SummaryCard'
import Button from '../../component/Button/Button'

function Summary() {
  return (
    <div className='summary-page'>
        <Navbar/>
        <div className='summary-container'>
            <p className='bold-small'>Summary</p>
            <p className='summary-section-title'>Idea Validation</p>
            <div className='sub-section-container'>
            <div className='sub-section-item'>
                    <p className='sub-section-item-text active'>Nama Section</p>
                    <div className='sub-section-item-indicator active'></div>
                </div>
                <div className='sub-section-item'>
                    <p className='sub-section-item-text'>Nama Section</p>
                    <div className='sub-section-item-indicator'></div>
                </div>
                
                <div className='sub-section-item'>
                    <p className='sub-section-item-text'>Nama Section</p>
                    <div className='sub-section-item-indicator'></div>
                </div>
            </div>
            <div className='summary-card-list'>
                <SummaryCard/>
                <SummaryCard/>
            </div>
            <div className='summary-button-container'>
                <Button
                    type={'alternate'}
                    text={'Retake'}
                />
                <div className='space'>

                </div>
                <Button
                    type={'primary'}
                    text={'Download as PDF'}
                />
            </div>
           
        </div>
    </div>
  )
}

export default Summary