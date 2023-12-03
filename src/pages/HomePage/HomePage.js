import React from 'react'
import Navbar from '../../component/NavBar/Navbar'

import './HomePage.css'
import Rocket from '../../assets/images/rocket.png'
import Button from '../../component/Button/Button'
import ClockTicking from '../../assets/images/clock-ticking.jpeg'
import Andrew from '../../assets/images/andrew.jpeg'
import DareYou from '../../assets/images/dare-you.jpeg'
import TakeAction from '../../assets/images/take-action.jpeg'
import { Constant } from '../../utils/Constant'
import Footer from '../../component/Footer/Footer'

function HomePage() {
  return (
    <div className='home-page'>
        <Navbar/>
        <div className='home-container'>
          <div className='hero-section'>
            <div className='image-container'>
              <div className='circle-left'>
              </div>
              <div className='image-rocket-container'>
                <img src={Rocket} alt='rocket' className='img-rocket'/>
              </div>
              <div className='circle-right'>

              </div>
            </div>
            <div className='hero-second-row'>
              <div className='hero-text-container'>
                  <p className='hero-title'>Launch Your <span className='hero-title-green'>Idea</span> Into a <span className='hero-title-green'>Business</span></p>
                  <p className='hero-subtitle'>Be the Trailblazer of Your <span className='hero-title-green'>Idea!</span> Let Our System Guide You to Turn Your Awesome <span className='hero-title-green'>Idea</span> into a Thriving <span className='hero-title-green'>Business</span></p>
                  <Button
                    type={'primary'}
                    text={'Launch It Now!'}
                  />
              </div>
            </div>
          </div>
          <div className='second-section'>
            <div className='clock-ticking-container'>
              <div className='clock-ticking-left'>
                <p className='title-text'>The clock is ticking. <br/>What are you<br/> waiting for?</p>
                <p className='reguler-text'>{Constant.CLOCK_TICKING}</p>
                <Button
                  type={'primary'}
                  text={'Turn Your Idea Now!'}
                />
              </div>
              <div className='clock-ticking-right'>
                <img src={ClockTicking} alt='clock-ticking' className='image-section'/>
              </div>
            </div>
            <div className='andrew-container'>
              <div className='andrew-right'>
                <img src={Andrew} alt='andrew' className='image-section'/>
              </div>
              <div className='andrew-left'>
                <p className='title-text'>Don’t Be The Next <br/>Andrew</p>
                <p className='reguler-text'>{Constant.ANDREW}</p>
                <Button
                  type={'primary'}
                  text={'Turn Your Idea Now!'}
                />
              </div>
            </div>
          </div>

          <div className='third-section'>
            <div className='dare-you-container'>
              <div className='dare-you-left'>
                <p className='title-text' style={{color:'var(--dark-blue)'}}>We Dare You !. <br/>Start Now !</p>
                <p className='reguler-text'>{Constant.DARE_YOU}</p>
                <Button 
                  type={'secondary'}
                  text={'Start Now'}
                />
              </div>
              <div className='clock-ticking-right'>
                <img src={DareYou} alt='clock-ticking' className='image-section'/>
              </div>
            </div>
            <div className='andrew-container'>
              <div className='andrew-right'>
                <img src={TakeAction} alt='andrew' className='image-section'/>
              </div>
              <div className='andrew-left'>
                <p className='title-text' style={{color:'var(--dark-blue)'}}>How Our System Will<br/>Help You ?</p>
                <p className='reguler-text'>{Constant.TAKE_ACTION}</p>
                <Button 
                  type={'secondary'}
                  text={'Start Now'}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default HomePage