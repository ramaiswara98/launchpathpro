import React from 'react'

import './IdeaCard.css'
import IconPlus from '../../assets/icon/plus-circle.png'
import IconLightBulb from '../../assets/icon/light-bulb.png'

function IdeaCard({start, onClickStart}) {
  return (
    <div className='idea-card-main'>
        {start?(
            <div className='idea-card-create-container' onClick={onClickStart}>
             <img src={IconPlus} alt='icon-plus' className='icon-32'/>
             <p className='idea-card-title'>Create Business</p>
            </div>
        ):(
            <div className='idea-card-container'>
            <div className='idea-card-three-rows'>
                <div className='idea-card-first-row'>
                    <div className='idea-card-icon-container'>
                        <img src={IconLightBulb} alt='icon-light-bulb' className='icon-32'/>
                    </div>
                    <div className='idea-card-right-side'>
                        <p className='idea-card-title'>Manusia Setengah Dewa apa</p>
                        <div className='idea-card-indicator'>
                            <span className='indicator-item'></span>
                            <span className='indicator-item'></span>
                            <span className='indicator-item'></span>
                            <span className='indicator-item'></span>
                        </div>
                        <p className='idea-card-indicator-text'>1 of 4 Completion</p>
                    </div>
                </div>
                <div className='idea-card-second-row'>

                </div>
                <div className='idea-card-third-row'>
                    <div className='idea-card-circle'>

                    </div>
                    <p className='idea-card-indicator-text'>Pending</p>
                </div>
            </div>
        </div>

        )}
       
        
    </div>
  )
}

export default IdeaCard